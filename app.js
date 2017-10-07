var	express = require('express');
var fs = require('fs'),
	url = require('url'),
	app = express.createServer(),
	io = require('socket.io').listen(app),
	//require('socket.io').listen(app, { log: false });
	mysql = require('mysql'),
	parseCookie = require('connect').utils.parseCookie;
var jsonxml = require('jsontoxml');
var http = require('http');	

var MemoryStore = express.session.MemoryStore,
    sessionStore = new MemoryStore();
var client = mysql.createClient({
		user:		'root',
		password:	'',
		database:	'mindweb',
	});

//client.connect();
var usersWS = {}; //紀錄線上使用者 socket用
var users = {}; // 用來對照uid跟uname
//res.setTimeout(0);




//===================================  APP 配置  ========================================

app.configure(function(){
	app.use(express.bodyParser());
	app.use(express.cookieParser());

	
	app.use(express.session({
		secret: 'keyboard cat',
		store: sessionStore
	}));
	
	app.use(express.methodOverride());
	app.set('view engine', 'html');
	
	app.register('.html', {
		compile: function(str, options){
			return function(locals){
				return str;
			};
		}
	});
	
	app.use(express.static(__dirname + '/public')); // 設定公眾目錄 public
	
});

app.listen(8080);



//===================================  URL  ========================================

// 設定預設首頁
app.get('/', function (req, res) {
	res.render(__dirname + '/views/login.html', {layout: false});
});

app.post('/resgisterSuccess',function(req,res){
    res.render(__dirname + '/views/login.html', {layout: false});
});

app.get('/login', function (req, res) {
	res.render(__dirname + '/views/login.html', {layout: false});	
});

// 判斷登入帳密是否成功
// 登入成功後的動作 將頁面導到 mind web
// 登入失敗後的動作 要求在輸入一次帳密
app.post('/login', function (req, res) {
	
	// 從post中抓資料出來
	var id = req.body.id;
	var pwd = req.body.pwd;

	// 去資料庫中查詢使用者帳密是否一致
	client.query(
	  "SELECT * FROM user WHERE userid = '" + id + "'",
	  function selectCb(err, results, fields) {
	    if (err) {
//	      throw err;
				console.log(err);
	    		res.send('failed');
		} else {
	    	if (results[0] == null || results[0] == undefined) {
	    		console.log('查無帳號: ' + id);
	    		res.send('failed');

	    	} else {	    		
				if (results[0]['pwd'] == pwd) {
		    		console.log('登入成功: ' + id);
		    		//console.log(results[0]);
		    		req.session.uname = results[0]['name'];
		    		req.session.uid = id;
		    		
		    		users[id] = req.session.uname;
		    		//res.redirect('/conference');   // 轉址由client端進行
		    		//res.send('success');
		    		if (req.session.uid && req.session.uid != '' && req.session.uid != undefined) 
					{
						res.render('Person_Manage.html', {layout: false});
					}
		    	} else {
					console.log('登入失敗 帳號' + id + " 密碼錯誤")
		    		console.log('登入失敗');
                    
		    	}
	    	}
	    }
//	    client.end();
	  }
	);
});

// // 把現存的網頁讀出來
// app.get('/Person_Manage', function (req, res) {
// 	// 判斷是否已登錄  
//     //alert('登入中');
// 	if (req.session.uid && req.session.uid != '' && req.session.uid != undefined) 
// 	{
// 		res.render('Person_Manage.html', {layout: false});
// 	}
// 	else
// 	{
// 		console.log('登入失敗');
// 		res.redirect('/');
// 	}
// });


// 註冊帳號 & 密碼     register.html
app.get('/register', function (req, res) {
	//res.sendfile(__dirname + '/register.html');
	res.render(__dirname + '/views/register.html', {layout: false});
});

app.post('/register', function (req, res) {	
	// 從post中抓資料出來
	var userid = req.body.id;
	var name = req.body.name;
	var pwd = req.body.pwd;	
    var email = req.body.pwd;
	// 資料庫連線初始化
/*	var client = mysql.createClient({
		user:		'LabWebUser',
		password:	'Lab103#4449',
		database:	'MindWeb'
	});
*/
	// 去資料庫中查詢使用者帳密是否一致
client.query(
		"INSERT INTO  user SET userid = ?, pwd = ?, name = ?, email =?",[userid,pwd,name,email],
		function insert(err, results) {
			if (err) {
				console.log('使用者: ' + userid + ' 新增失敗');
				res.render(__dirname + '/views/login.html', {layout: false});
				// res.send('failed');
			} else {
				client.query("insert into userpicture set filename = 'user.png',userid=?",[userid],
					function(err,results){
						if(err) console.log("userpicture initiallize fail");
						else{
							console.log("userpicture initiallize success"); 
						}
				});
				console.log('使用者: ' + userid + ' 新增成功')
				res.send('success');
			} 
//			client.end();
		}
	);	
});
app.post('/check',function(req,res) {
    var mapid = req.body.mapid;
    client.query(
		"select status from map where mapid =?",[mapid],
		function selectCb(err,results){
		if(err){
	//  throw err;
			res.send('cccc');
		}else{
			res.send(JSON.stringify(results[0].status));
			//console.log('status'+results[0].status)
			}
		}
	);
});
//Person 
app.post('/loadmap', function (req, res) {
    var mapid = req.body.mapid;
    //將選擇的專案 #prjselect.val()值 傳送到 conference page
    
    //res.render('/views/conference.html', {layout: false});//,function() {
    res.send(mapid);
   //});
});
//Person 20150610
app.get('/conference', function (req, res) {
	// 判斷是否已登錄
		res.render('conference.html', {layout: false});
});


app.get('/logout', function (req, res) {
	req.session.uid = null;
	req.session.uname = null;
	res.redirect('/');
});

app.get('/play', function (req, res) {
	
	if (req.session.uid && req.session.uid != '' && req.session.uid != undefined) 
	{
		console.log(req.session.uname + ' play log, mapid: ' +req.session.mapid);
		res.render('logplay.html', {layout: false});
	}
	else
	{
		console.log('登入失敗:play');
//		res.redirect('/');
		res.send("401 Unauhtorized Access.");
	}
});

app.post('/update', function (req, res) {
	// 寫入資料庫

	var date = new Date();
	var time = date.getTime();


	var   act = req.body.act
		, MapID = req.body.MapID
		, NodeID = req.body.NodeID
        , MapName = req.body.Name;	

	if (req.session.uid && req.session.uid != '' && req.session.uid != undefined) 
	{	
		if(act != 'loadbriefnodeinfo') //防洗頻
			console.log('app post:update:' + act);
	}
	else
	{
		console.log('登入失敗:update:' + act);
//		res.redirect('/');
		res.send("401 Unauhtorized Access.");
		return;
//			res.render(__dirname + '/views/login.html', {layout: false});
	}

	switch(act)
	{
		
		// 先要到一個mapid
		// 再新增一筆node資料 NodeID會自動+1
		// 把除了NodeID以外的欄位資訊塞進去
		// 回傳該筆資料的NodeID根MapID
		case 'mapinit':
			var Content = req.body.Content,
			    ps = req.body.ps,
				starttime = req.body.starttime,
				endtime = req.body.endtime,
				budget = req.body.budget,
				leader = req.body.leader,
				status = req.body.status,
				Creater = req.session.uid,
				Created = req.body.Created,
				Modifier = req.session.uid,
//				Modified = req.body.Created, // 第一次的修改 同建立				
				mapname = req.body.mapname,
                //0914 預算new 新增
                FinshDate = req.body.FinshDate,
				islock = req.body.islock,
				isanonymity = req.body.isanonymity;
				//creater = req.session.uname;	

			
			// 資料庫連線初始化
/*			var client = mysql.createClient({
				user:		'LabWebUser',
				password:	'Lab103#4449',
				database:	'MindWeb'
			});
*/
//Working
/*
            client.query(
                "insert into accesscontrol (mapid,userId) values("+session.mapid+","+userid+"')",
                function selectCb(err, results){
                    if(err){
                        //throw err;
                        res.send('failed');
                    }
                }
            )
*/

			client.query(
				"insert into map (created,mapname,isanonymity,creater) values ("+ Created + ",'" + mapname +"'," + isanonymity +",'" + Creater + "')",
				function selectCb(err, results) {
				    if (err) {
//						throw err;
						res.send('failed');
				    }
				    else 
				    {
				    	var mapid = parseInt(results.insertId.toString()); // 取得新的mapid				    	
				    	req.session.mapid = mapid;  // 設定該使用者目前正在進行的專案編號				    	
				    	//console.log(mapid);

				    	console.log("目錄建立:" + __dirname + "/public/upload/" + mapid);
						fs.mkdir(__dirname + "/public/upload/" + mapid ); // 建立檔案目錄 以供上傳用		
				    	
						client.query(
							"insert into node (MapID,ParentNodeID,Content,ps,starttime,endtime,budget,leader,Creater,Created,Modifier,Position,FinishDate,islock) values (" + mapid + ",0,'" + Content + "','" + ps + "','" + starttime + "','" + endtime + "','" + budget + "','" + leader + "','" + Creater + "'," + Created  + ",'" + Modifier + "','"+FinishDate+"',"+islock+")",
							function selectCb(err, results) {
								if (err) {
									// throw err;
									res.send('failed');
							    } else {
							    	// 把最後新增的NodeID跟MapID回傳給client
							    	res.send(results.insertId.toString() + ',' + mapid.toString());
							    }
							}
						);
				    }
//				    client.end();
				}
			);
			
		break;
		
		////////////////////////////////////當增加任一節點時 皆會先在資料庫建立開節點的nodeid
		case 'node_create':		
			var ParentNodeID = req.body.ParentNodeID,
				//Content = req.body.Content,
				Content = '新節點',
				//ps = req.body.ps,
				ps = 0,
				//starttime = req.body.starttime,
				starttime = dataformat(time),

				//endtime = req.body.endtime,
				endtime = dataformat(time),
				//budget = req.body.budget,
				budget = 0,
				//leader = req.body.leader,
				leader ="",
				Creater = req.session.uid,
				Created = req.body.Created,
				Modifier = Creater,
//				Modified = Created,
				Position = req.body.Position,
//0914 new預算新增
				//FinishDate = req.body.FinishDate;
				FinishDate = "";
			//console.log("check" +FinishDate);
			// 資料庫連線初始化
/*			var client = mysql.createClient({
				user:		'LabWebUser',
				password:	'Lab103#4449',
				database:	'MindWeb'
			});
	*/	    //console.log(Content);
			client.query(//0914new 新增
				"insert into node (MapID,ParentNodeID,Content,ps,starttime,endtime,budget,leader,Creater,Created,Modifier,Position,islock,FinishDate) values (" + MapID + "," + ParentNodeID + ",'" + Content + "','" + ps + "','" + starttime + "','" + endtime + "','" + budget + "','" + leader + "','" + Creater + "',"+ Created + ",'" + Modifier + "'," + Position +",0,'')",
				function selectCb(err, results) {
				    if (err) {
						//throw err;
						console.log('我失敗在這裡');
						res.send('failed');
				    }
				    else
				    {
						res.send(results.insertId.toString() );
				    }
//				    client.end();
				}
			);
		break;

		////////////////////////////////////當node每次被操作時 都會進行儲存
		case 'node_edit': 
			var Content = req.body.Content,
			    ps = req.body.ps,
				starttime = req.body.starttime,
				endtime = req.body.endtime,
				budget = req.body.budget,
				leader = req.body.leader,
				ParentNodeID = req.body.ParentNodeID,
				Modifier = req.session.uid,
				Modified = req.body.Modified,
				Position = req.body.Position;
				//0913 預算
                FinishDate = req.body.FinishDate;
				RealCost = req.body.RealCost;//巫

                //console.log("FinishDate" + FinishDate);

                console.log(FinishDate + "testing");
				// 資料庫連線初始化
/*				var client = mysql.createClient({
					user:		'LabWebUser',
					password:	'Lab103#4449',
					database:	'MindWeb'
				});
*/		 //0914 new 預算新增	
var sql="update node set RealCost = '"+RealCost+"'.Content = '" + Content + "', ps = '" + ps + "', starttime = '" + starttime + "', endtime = '" + endtime + "', budget = '" + budget + "', leader = '" + leader + "', Modifier = '" + Modifier + "', ParentNodeID = " + ParentNodeID + ", Position = " + Position  + ", FinishDate = " + FinishDate + ", islock = 0" +  " where NodeID = " + NodeID + " and unix_timestamp(Modified)*1000 <= "+ Modified;
//res.send(sql)
					client.query(
					'update node set Content = ?, ps = ?, starttime = ?, endtime = ?, budget = ?, leader = ?, Modifier = ?, ParentNodeID= ?, Position = ?,FinishDate = ?, islock = 0 where NodeID = ? and unix_timestamp(Modified)*1000 <= ?', [Content, ps, starttime, endtime, budget, leader, Modifier, ParentNodeID, Position,FinishDate,NodeID, Modified],
					function selectCb(err, results, fields) {
					    if (err) {
//							throw err;
					    	res.send('failed');
					    } else {
							if (results.affectedRows > 0) {
							    res.send('success');
							} else {
								res.send('failed');
							}
						}
					}
				);
		break;

		case 'node_drag':
			var tid = req.body.tid,
				sid = req.body.sid;
				pos = req.body.pos;
				
				console.log("update node set ParentNodeID = " + tid + ", Position = " + pos + " where NodeID = " + sid);
				
				// 資料庫連線初始化
/*				var client = mysql.createClient({
					user:		'LabWebUser',
					password:	'Lab103#4449',
					database:	'MindWeb'
				});
*/			
				client.query(
					'update node set ParentNodeID = ?, Position = ? where NodeID=?', [tid, pos,sid],
					function selectCb(err, results, fields) {
					    if (err) {
//							throw err;
					    res.send('failed');
					    } else
					    res.send('success');
//					    client.end();
					}
				);
				
		break;		
		
		case 'node_iconadd':
		var iconSrc = req.body.iconSrc;
			// 資料庫連線初始化
/*			var client = mysql.createClient({
				user:		'LabWebUser',
				password:	'Lab103#4449',
				database:	'MindWeb'
			});
*/			
			client.query(
				"update node SET icon1 = '" + iconSrc + "' where NodeID = " + NodeID,
				function selectCb(err, results, fields) {
					    if (err) {
//							throw err;
					    res.send('failed');
					    }
					    res.send('success');
//				    client.end();
				}
			);					
		break;

		case 'node_iconremoveall':
			// 資料庫連線初始化
/*			var client = mysql.createClient({
				user:		'LabWebUser',
				password:	'Lab103#4449',
				database:	'MindWeb'
			});
*/
			client.query(
				"update node set icon1 = null where NodeID = " + NodeID,
				function selectCb(err, results, fields) {
						if (err) {
//							throw err;
					    res.send('failed');
					    }
					    res.send('success');
//				    client.end();
				}
			);
		break;
		
		/////////////////////////////////////讀檔
		// 思考邏輯  不使用callback() 因為在建立Object結構時 會造成過多的DB Connection
		// step1: 給定一個MapID 讀出所有的Nodes
		// step2: 在Nodes中 找到ParentNodeID=0 設定該node為root
		// step3: 在其他Nodes中 找到ParentNodeID = root's NodeID 將其Node加入至root's Childs中
		// step4: 重複以上步驟 把全部的nodes建立成一個物件
		case 'load':

			// 資料庫連線初始化
/*			var client = mysql.createClient({
				user:		'LabWebUser',
				password:	'Lab103#4449',
				database:	'MindWeb'
			});
*/
			client.query(
				"SELECT * FROM node WHERE MapID=?", [MapID],
				function selectCb(err, results, fields) { // step1
			    if (err) {
//					throw err;
					    res.send('failed');
			    } else {						
				    req.session.mapid = MapID;  // 設定該使用者目前正在進行的專案編號
				    console.log(req.session.uname + ' load map: ' + req.session.mapid);
					var objNode;

					for( var i in results)
  //find root node
					{
						if (results[i].ParentNodeID == 0)
						{
							objNode = results_to_object(results[i]); // step2
							break; //use the first-found node as root
						}
					}

					build_objNode_from_results(results, objNode); // step3+4
					res.send(JSON.stringify(objNode)); // 把物件包裝成JSON字串丟給client端

			    }
//			    client.end();
			  }
			);
		break;
		
		//XML 0830
		case 'getxml':
			client.query(
				"SELECT * FROM node WHERE MapID=?", //to do: 點擊右鍵能自某節點以下匯出
				[MapID],
				function selectCb(err, results, fields) { // step1
					if (err) {
					    res.send('failed');
					} else {						
						req.session.mapid = MapID;  // 設定該使用者目前正在進行的專案編號
						var objNode = {};
						for (var i in results) {
							if (results[i].ParentNodeID == 0) {
								objNode = results_to_object(results[i]); // step2
								break; //use the first-found node as root
							}
						}
						
						build_objNode_from_results(results, objNode); // step3+4
						var xml = jsonxml({mapdata: objNode}, {xmlHeader: true, prettyPrint: true, indent: "  "});
						// create UUID or time-log as dirname to prevent from recovering file
						var xmlFile = 'export.xml';
						fs.writeFile(__dirname + '\\public\\' + xmlFile, xml, function(err) {
							if (err) {
								return;
							}
							res.send(xmlFile);
						});
					}
				}
			);
			break;
			
			
			//0913 部分節點匯出xml - get family IDs
			case 'getxml_bynode':
				var x = NodeID;
				xml_bynode(x);
				var nodes_family =x+" ";
				function xml_bynode(x){
					client.query(
					"SELECT * FROM node WHERE NodeID=? or ParentNodeID=?", //點擊右鍵能自某節點以下匯出
					[x,x],
					function selectCb(err, results) { 
						if (err) {
							res.send('failed');
						} else {
							client.query("select nodeID from node where ParentNodeID=?",[x],
							function(err,result){
								if(err) console.log(err);
								else if(result !=""){
									for(var i=0; i<result.length; i++){
										console.log(result[i]['nodeID']);
										nodes_family += result[i]['nodeID']+" ";
										xml_bynode(result[i]['nodeID']);
									}
								}else res.send(nodes_family);
							});
						}//end of cb1 else
					});
				
				}
			break;
			
			//0913 部分節點匯出xml - export
			case 'getxml_bynode_exportprocess':
			
			console.log(req.body.sqlquery);
			client.query(req.body.sqlquery,function selectCb(err, results, fields) { // step1
					if (err) {
					    res.send('failed');
					} else {
						var objNode = {};
						for (var i in results) {
							console.log(results[i].NodeID);
							if (results[i].NodeID == req.body.selected) {
								objNode = results_to_object(results[i]); // step2
								break; //use the first-found node as root
							}
						}
						
						build_objNode_from_results(results, objNode); // step3+4
						var xml = jsonxml({mapdata: objNode}, {xmlHeader: true, prettyPrint: true, indent: "  "});
						// create UUID or time-log as dirname to prevent from recovering file
						var xmlFile = 'export.xml';
						fs.writeFile(__dirname + '\\public\\' + xmlFile, xml, function(err) {
							if (err) {
								return;
							}
							res.send(xmlFile);
						});
					}
				}
			);
			break;
		
		////////////////////////////////////當增加任一節點時 皆會先在資料庫建立開節點的nodeid
		case 'node_create':	
            var NewNodeID;
			var ParentNodeID = req.body.ParentNodeID,
			//	Content = req.body.Content,
			    Content = '新節點',
				ps = req.body.ps,
				starttime = req.body.starttime,
				endtime = req.body.endtime,
				budget = req.body.budget,
				leader = req.body.leader,
				Creater = req.session.uid,
				Created = req.body.Created,
				Modifier = Creater,
//				Modified = Created,
				Position = req.body.Position;
				
			
			// 資料庫連線初始化
/*			var client = mysql.createClient({
				user:		'LabWebUser',
				password:	'Lab103#4449',
				database:	'MindWeb'
			});
	*/	
			client.query(  //new 0914新增預算
				"insert into node (MapID,ParentNodeID,Content,ps,starttime,endtime,budget,leader,Creater,Created,Modifier,Position,FinishDate) values (" + MapID + "," + ParentNodeID + ",'" + Content + "','" + ps + "','" + starttime + "','" + endtime + "','" + budget + "','" + leader + "','" + Creater + "',"+ Created + ",'" + Modifier + "'," + Position  + "'," + FinishDate + ")",
				function selectCb(err, results) {
				    if (err) {
						//throw err;
						res.send('failed');
				    }
				    else{ //查出node是否為block和該node中 有編輯權限的名單
                      client.query("select node.islock,nodeaccesscontrol.userid from node left join nodeaccesscontrol on node.NodeID = nodeaccesscontrol.NodeID  where node.NodeID=?",[ParentNodeID],
                        function(err,result1){
                            if(err) console.log('fail3');
                            else{
                              if(result1[0]['islock'] == 1) {//如果父節點的islock為1 鎖住的話 要去看accesscontrol看有誰能夠編輯 並將新的node+上該user的id存進去
                                client.query("SELECT LAST_INSERT_ID()",  //立刻找出新增後的nodeID為多少
                                function(err,result2){
                                    if(err) console.log('fail2');
                                    else{
                                        NewNodeID = result2[0]['LAST_INSERT_ID()'];
                                        for(var i=0;i<result1.length;i++){ //若有多名可編輯使用者 則用for一一輸入
                                            client.query("insert into nodeaccesscontrol (NodeID,userid) values (?,?);",[ NewNodeID, (result1[i]['userid']) ],
                                                function(err,result3){
                                                   if(err) console.log(err);
                                                   else  console.log('success');
                                                }
                                            );
                                        }
                                    }
                                });
                              }
                            }
                        });
                    }
					res.send(results.insertId.toString() );
//				    client.end();
				}
			);
		break;
		
		/////////////////////////////////////列出資料庫中的mapid 
		case 'listPrj': 
            var Data ;
			client.query(
                
				"SELECT distinct map.*, user.name From accessControl, map left JOIN user on map.Creater = user.userid where mapname like ? and accessControl.mapid=map.mapid and map.active>0 and accessControl.userId =? order by mapid DESC", [MapName , req.session.uid],
				function selectCb(err, results, fields) {
			    if (err) {
//						throw err;
                        console.log(err);
					    res.send('failed');
				} 
			    else 
			    {					
						var data = "<select class='form-control' id='prjselect' size='7' style='width:100%; height:100%;border:0' onchange='java_script_:projectDetail(this.options[this.selectedIndex].value)'>";

						for(var i=0; i<results.length; i++){
							data += "<option  style='height:60px;line-height:10px;font-size:35px;font-family::DFKai-sb' value='" + results[i]['mapid'] + "'>" + " ◎ " + results[i]['mapname'] +  "</option>";
						}
						data += "</select>  ";

						res.send(data);
				}
			  }
			);
         
		break;
		/////////////////////////////////////刪除節點 
		case 'node_del':
			//var delnodeids = req.body.delnodeids;		
            console.log("node_del");
            deleteNode(req.body.NodeID);
            function deleteNode(NODEID){
				client.query("update node set ParentNodeID = -1 where NodeID =?",[NODEID],
				 	function(err,results){
				 		if(err){console.log("node delete fail");}
				 		else{
				 			client.query("select NodeID from node where ParentNodeID =?",[NODEID],
				 				function(err,results){
				 					if(err){console.log("Select NodeID fail");}
				 					else{
				 					    if(results !=""){
						                   for(var i=0; i<results.length;i++){
	                                    	deleteNode(results[i]['NodeID']);
	                                    }			
						                }else  res.send('success');
	                                  		 
				 					}
				 				}
				 			);
				 		}

				});
		    }

// 			var sql = "update node set ParentNodeID = -1 where ";
			
// 			if (delnodeids.length == 1)
// 				sql += "NodeID = " + parseInt(delnodeids[0]);
// 			else
// 			{
// 				for (var i=0; i<delnodeids.length-1; i++)
// 				{
// 					sql += "NodeID = " + parseInt(delnodeids[i]) + " OR ";
// 				}
// 				sql += "NodeID = " + parseInt(delnodeids[delnodeids.length-1]);
// 			}
// 			console.log(sql);
// 			// 資料庫連線初始化
// /*			var client = mysql.createClient({
// 				user:		'LabWebUser',
// 				password:	'Lab103#4449',
// 				database:	'MindWeb'
// 			});
// */
// 			client.query(
// 				sql,
// 				function selectCb(err, results) {
// 			    if (err) {			    	
// //					throw err;
// 					    res.send('failed');
// 				}
// 			    else {
// 					    res.send('success');
// 			    }
//			    client.end();
			//   }
			// );
			
		break;
		
		case 'loadnodeinfo':
			var nodeinfo;
			client.query(
				"select node.*,user.name as CreaterName from node left join user on node.Creater=user.userid where NodeID =?", [NodeID],
				function selectCb(err, results) {
			    if (err) {
//					throw err;
					    res.send('failed');
			    } else {

			    	if (results[0]) {
						nodeinfo = results_to_object(results[0]);
						res.send(JSON.stringify(nodeinfo));
					} else res.send("failed");
			    }
			  }
			);

		break;
		
		// 判斷node是否處於lock狀態 如果不昰 則傳回no 如果是 則傳回yes 
		case 'node_getlock':
			// 資料庫連線初始化
/*			var client = mysql.createClient({
				user:		'LabWebUser',
				password:	'Lab103#4449',
				database:	'MindWeb'
			});
*/
			client.query(
				"select islock from node where NodeID = ?", [NodeID],
				function selectCb(err, results) {
			    if (err) {			    	
//					throw err;
					    res.send('failed');
			    }
			    else {
			    	if (results[0]['islock'] >0)
			    		res.send('failed');
			    	else {
			    		client.query(
							"update node set islock = 1 where NodeID = ?", [NodeID],
							function selectdb(err, results) {
								if (err) {
//									throw err;
								    res.send('failed');
								} else {
									res.send('success');
								}
//								client.end();
							});
			    	}
			    }
			    client.end();
			 });
		break;
		
		case 'node_unlock':
/*			var client = mysql.createClient({
				user:		'LabWebUser',
				password:	'Lab103#4449',
				database:	'MindWeb'
			});
*/			
			client.query(
				"update node set islock = 0 where NodeID = ?", [NodeID],
				function selectCb(err, results) {
			    if (err) {			    	
//					throw err;
				    res.send('failed');
					console.log('Error! can not reset lock sign for node:' & NodeID);
			    }
			    res.send('success');
//			    client.end();
			});
		break;
		
		case 'discusstion_save':
			var Content = req.body.Content,
				posttime = req.body.posttime;
/*			var client = mysql.createClient({
				user:		'root',
				password:	'1234',
				database:	'MindWeb'
			});
*/			
			client.query(
				"INSERT INTO discusstion SET NodeID = ?,Time = ?,Poster = ?, Content = ?",[NodeID,posttime,req.session.uname,Content],
				function selectCb(err, results) {
			    if (err) {			    	
//					throw err;
					res.send('failed');
			    }
				res.send('success');
			    //console.log(results);
//			    client.end();
			});
		break;

		case 'map_discussion_load':
			client.query(
				"select user.name, userpicture.filename, chatLog.Time, chatLog.Poster, chatLog.Receiver, chatLog.Content from user,chatLog,accesscontrol,userpicture where user.userid=chatLog.Poster and chatLog.MapID=accesscontrol.mapid and accesscontrol.userid=userpicture.userid and chatLog.Poster=userpicture.userid and chatLog.MapID =? and (chatLog.Receiver='public') Order by chatLog.dID ",[MapID],
				function selectCb(err, results) {
			    if (err) {
//					throw err;
					res.send('Loading message failed');
			    }
			    //console.log(results);
			    res.send(JSON.stringify(results)); // 把物件包裝成JSON字串丟給client端
//			    client.end();
			});
		break;

		case 'discusstion_load':

/*			var client = mysql.createClient({
				user:		'root',
				password:	'1234',
				database:	'MindWeb'
			});
*/			
			client.query(
				"select Time, Poster, Content from discusstion where NodeID =? Order by dID",[NodeID],
				function selectCb(err, results) {
			    if (err) {	
//					throw err;
					res.send('failed');
			    }
			    //console.log(results);
			    res.send(JSON.stringify(results)); // 把物件包裝成JSON字串丟給client端
//			    client.end();
			});
		break;
		
		case 'getfilelist_map':		
/*
			var client = mysql.createClient({
				user:		'LabWebUser',
				password:	'Lab103#4449',
				database:	'MindWeb'
			});
*/				
			client.query(
				"select * from upload where mapid = ?",[ req.session.mapid],
				function selectCb(err, results) {
				    if (err) {
//						throw err;
						res.send('failed');
				    } else {
					res.send(JSON.stringify(results));
//					client.end();
					}
			});
		break;
		
		case 'getfilelist_node':
	
/*			var client = mysql.createClient({
				user:		'LabWebUser',
				password:	'Lab103#4449',
				database:	'MindWeb'
			});
	*/			
			client.query(
				"select * from upload where nodeid = ?", [NodeID],
				function selectCb(err, results) {
				    if (err) {
//						throw err;
						res.send('failed');
				    } else {
					res.send(JSON.stringify(results));
		//			client.end();
					}
			});
		break;		
		
		
		case 'delfile':
			var no = req.body.no;
			var filename;
			
/*			var client = mysql.createClient({
				user:		'LabWebUser',
				password:	'Lab103#4449',
				database:	'MindWeb'
			});
	*/			
			client.query(
				"select filename from upload where no = ?", [no],
				function selectCb(err, results) {
				    if (err) {
//						throw err;
						res.send('failed');
						return;
				    }
				    				    
					filename = results[0]['filename'];
					//console.log(filename);
					
					client.query(
						"delete from upload where no = ?", [no],
						function selectCb(err, results) {
						    if (err) {
//								throw err;
								res.send('failed');
								return;
							}
//							client.end();
							
							fs.unlink(__dirname + "/public/upload/" + req.session.mapid + "/" + filename ,function (err, files) {
								if (err) {
									console.log(err); //an orphan file will be left there
//									throw err;
//									res.send('failed');
								} else {
//									res.send('success');
								}
									res.send('success');
							});
					});
			});
		break;

		case 'setnodeid':  // 為了upload特別設定的 Orz
			req.session.NodeID = NodeID;
			console.log("set NodeID:" + NodeID);
			res.send('success');
		break;
		
		case 'getrootnodeid':
			if (req.session.mapid == null || req.session.mapid == undefined) return;			
			
/*			var client = mysql.createClient({
				user:		'LabWebUser',
				password:	'Lab103#4449',
				database:	'MindWeb'
			});
*/				
			client.query(
				"select NodeID from node where ParentNodeID = 0 and MapID = ?", [req.session.mapid],
				function selectCb(err, results) {
				    if (err) {
//						throw err;
						res.send('failed');
						return;
				    }
				    var rootnodeid = results[0]['NodeID'];					
					res.send(JSON.stringify(rootnodeid));
//					client.end();
			});			
		break;

		case 'getlog':
			if (req.session.mapid == null || req.session.mapid == undefined) return;
			if (req.session.lognos == null || req.session.lognos == undefined ) req.session.lognos = 0;
			
			console.log("select * from log where MapID = " + req.session.mapid + " and no > " + req.session.lognos);
/*			
			var client = mysql.createClient({
				user:		'LabWebUser',
				password:	'Lab103#4449',
				database:	'MindWeb'
			});
*/				
			client.query(				
				"select * from log where MapID =? and no > ?",[req.session.mapid, req.session.lognos],
				//"select * from log where MapID = " + req.session.mapid + " and no > 50",
				function selectCb(err, results) {
				    if (err) {
//						throw err;
						res.send('failed');
						return;
				    }

				    if (results[0] == null) { //表示查不到資料了 最後一筆已送出
				    	res.send("complete");
				    	req.session.lognos = null; // 初始化 不然下次來查 session還在
				    	console.log('查詢完畢');
				    }
				    else
				    {
				    	req.session.lognos = results[0]['no'];
				    	res.send(JSON.stringify(results[0]));
				    }
//					client.end();
			});			
		break;


		case 'loglistload':
			if (req.session.mapid == null || req.session.mapid == undefined) return;
/*
			var client = mysql.createClient({
				user:		'LabWebUser',
				password:	'Lab103#4449',
				database:	'MindWeb'
			});
	*/			
			client.query(				
				"select * from log where MapID = ?", [req.session.mapid],				
				function selectCb(err, results) {
				    if (err) {
//						throw err;
						res.send('failed');
				    } else 
					res.send(JSON.stringify(results));
//					client.end();
			});
			
		break;
		//20150609 node資訊即時顯示
		case 'loadbriefnodeinfo':
			var nodeinfo;
			client.query(
				"select node.*,user.name as CreaterName from node left join user on node.Creater=user.userid where NodeID =?", [NodeID],
				function selectCb(err, results) {
			    if (err) {
					    res.send('failed');
			    } else {
			    	if (results[0]) {
						nodeinfo = results_to_object(results[0]);
						res.send(JSON.stringify(nodeinfo));
					} else res.send("failed");
			    }
			  }
			);

		break;

		default:
		break;
	}
});

// 開啟上傳的文件, this is a dangerous way to do this. need mods later
app.get('/files', function (req, res) {
	if (req.session.uid && req.session.uid != '' && req.session.uid != undefined) 
	{
		var filename = req.query['filename'];
		res.sendfile('/public/upload/' + req.session.mapid + '/' + filename, {root: __dirname});
	}
	else
	{
		console.log('登入失敗');
//		res.redirect('/');
		res.send("401 Unauhtorized Access.");
	}
});

// 檔案上傳 參考自http://cnodejs.org/topic/4f40a4dc0feaaa4424081758
app.post('/upload', function(req,res) {	
	if (req.session.uid && req.session.uid != '' && req.session.uid != undefined) 
	{	}
	else
	{
		console.log('登入失敗');
//		res.redirect('/');
		res.send("401 Unauhtorized Access.");
		return;
	}

	var filename =  req.files.thumbnail.name;	
	
	if (filename.length > 45) {
		res.send('failed');
		return;
	}
	
	var mapid = req.session.mapid;
	// 取得文件上傳後的臨時路徑
	var tmp_path = req.files.thumbnail.path;
    // 設定文件上傳目錄
    var target_path = './public/upload/' + mapid + '/' + filename;
    console.log('上傳路徑為:' + target_path);
    // 將文件更名 並移動到設定好的目錄下
	fs.rename(tmp_path, target_path, function(err) {
		if (err) {
//			throw err;
			console.log(err);
			res.send('failed')
			return;
		} else { 
			//res.send('File uploaded to: ' + target_path + ' - ' + req.files.thumbnail.size + ' bytes');
			//res.send(JSON.stringify(req.files.thumbnail));
			var date = new Date;
			var time = date.getTime();
			client.query(
"INSERT INTO upload SET filename = ?, mapid = ?, nodeid = ?, poster = ?, time = ?", [filename, mapid, req.session.NodeID, req.session.uname, time],
				function selectCb(err, results) {
		    		if (err) {
						res.send('failed');
						fs.unlink(target_path, function(err) { 
							if (err) console.log(err);
						});		
					} else {
						res.send('success');
					}
				}
			);
		}
		
		// 刪除臨時文件
		fs.unlink(tmp_path, function(err) { 
			if (err) console.log(err);
		});
	});
});

// 傳入資料庫查詢的結果(results) 此將之建立到objNode中為parent
function build_objNode_from_results(results, objNode) 
{
	for( var i in results)
	{
		if (results[i].ParentNodeID == objNode.NodeID)
		{
			var objchild = results_to_object(results[i]);
			objNode.Childs.push(objchild);
			build_objNode_from_results(results, objchild); // step4
		}
	}
}

// 以非同步來實現 線性流程
// 研究這個 http://stackoverflow.com/questions/5010288/how-to-make-a-function-wait-until-a-callback-has-been-called-using-node-js
// http://ithelp.ithome.com.tw/question/10081903
// http://wiki.nodejs.tw/nodejs_from_scratch/javascript-yunodejs/flow-control

// 把資料庫讀出的集合 轉為物件回傳
function results_to_object(results) 
{
	// 建立物件 儲存所有根節點的內容
	var objNode = new Object();
	//console.log(results);
	objNode.NodeID = results.NodeID;
	objNode.MapID = results.MapID;
	objNode.ParentNodeID = results.ParentNodeID;
	objNode.Content = results.Content;
	objNode.ps = results.ps; //已支出花費
	objNode.starttime = results.starttime;
	objNode.endtime = results.endtime;
	objNode.budget = results.budget;//預算
	objNode.leader = results.leader;
	objNode.Created = results.Created;
	objNode.Creater = results.Creater;
	objNode.Modified = results.Modified;
	objNode.Modifier = results.Modifier;
	objNode.Position = results.Position;
	objNode.FinishDate = results.FinishDate;
	objNode.Childs = new Array();
	objNode.icons = new Array();
	
//0914 新增預算
    objNode.FinishDate = results.FinishDate;

	if (results.icon1 != null)
		objNode.icons.push(results.icon1);
	if (results.icon2 != null)
		objNode.icons.push(results.icon2);
	if (results.icon3 != null)
		objNode.icons.push(results.icon3);

	return objNode;
}

function dataformat (ms)
{
	var date = new Date(ms);
	var year = date.getYear() + 1900;
	var seperator = "/";
	var month = date.getMonth()+1;
	var strDate = date.getDate();
	if(month>=1 && month<=9)
	{
		month = "0"+month;
	}
	if(strDate>=0&& strDate<=9)
	{
		strDate = "0"+ strDate;
	}
	 //return year+seperator+month+seperator+strDate;
	 return month+seperator+strDate+seperator+year;
}

//===================================  SOCKET.IO 配置  ========================================

//=================配置socket.io=========================

io.set('authorization', function (handshakeData, callback) {

	if (handshakeData.headers.cookie) 
	{
		handshakeData.cookie = parseCookie(handshakeData.headers.cookie);
		handshakeData.sessionID = handshakeData.cookie['connect.sid'];
		sessionStore.get(handshakeData.sessionID, function (err, session) {
			if (err) {
				callback(err.message, false); //Turn down the connection
			} else {				
				handshakeData.session = session; //Accept the session
				callback(null, true);
			}
		});
	} else {
		return callback('No cookie transmitted.', false);
	}
});

// socket連線設定
io.sockets.on('connection', function (socket) {
	var session = socket.handshake.session;//session	
	var uid;
	
	if ( session != undefined)
	{
		uid = session.uid;
		usersWS[uid] = socket; // 紀錄使用者的socket		
	}

	refresh_online(); // 更新線上人數
	
	socket.emit('connected');
	
	socket.on('set_mapid', function (data) {
		if ( session != undefined) session.mapid = data;
	});

  	socket.on('node_create', function (data) {
		if ( session != undefined) {
		    socket.broadcast.emit('node_create', data);
		    var date = new Date();
		    var time = date.getTime();
		    client.query(
            "INSERT INTO log SET mapid = ?, uname = ?, action = ?, content = ?, time = ?",[session.mapid,session.uname,'node_create',data.toString(),time],  
			function selectCb(err, results) {
			    if (err) {
//			    throw err;
			    }
		    });
		}
	});
    
    socket.on('delmessages', function (data) { // 得到 prjID
    socket.broadcast.emit('delmessages',[data]); 
    client.query(
    "DELETE FROM chatLog WHERE MapID = ?",[data],
    function selectCb(err, results) {
        if (err) {//意外事件處理區塊
        }
    });
});
    
    //socket.on('check_status',function(status){
  	socket.on('node_edit', function (data) {
		if ( session != undefined) {
			socket.broadcast.emit('node_edit', data);
			var date = new Date();
			var time = date.getTime();
			client.query(
			"INSERT INTO log SET mapid = ?, uname = ?, action = ?,content = ?, time = ?",[session.mapid,session.uname,'node_edit',data.toString(),time],
			function selectCb(err, results) {
			    if (err) {
			    }
			});
		}
	});

  	socket.on('node_delete', function (data) {
		if ( session != undefined) {
			socket.broadcast.emit('node_delete', data);
			var date = new Date();
			var time = date.getTime();
			client.query(
	        "INSERT INTO log SET mapid = ?, uname = ?, action = ?,content = ?, time = ?",[session.mapid,session.uname,'node_delete',data.toString(),time],
			function selectCb(err, results) {
			    if (err) {
			    }
			});
		}
	});
	socket.on('reload',function(data){
		if ( session != undefined){
		    session.mapid = data;
			socket.broadcast.emit('reload', data);
			console.log(data);
		}
		
	});
  	socket.on('node_drag', function (data) {
		if ( session != undefined) {
			socket.broadcast.emit('node_drag', data);
			var date = new Date();
			var time = date.getTime();
			client.query(
	        "INSERT INTO log SET mapid = ?, uname = ?, action = ?,content = ?, time = ?",[session.mapid,session.uname,'node_drag',data.toString(),time],
			function selectCb(err, results) {
			    if (err) {
			    }
			});
		}
	});
	//聊天室更改
	socket.on('publicmessage', function (data) { // 得到 msg prjID
 		if ( session != undefined){
 			client.query("select userpicture.filename from userpicture where userid=? ",[session.uid],
 				function(err,result){
 					if(err) console.log("get message userpicture fail");
 					else{
 						socket.broadcast.emit('publicmessage', [data[0],data[1],session.uname,result[0]['filename']]); // 送出 msg prjID uname
 					}
 				})
 		}
 		 
			var date = new Date();
			var time = date.getTime();
			client.query(
	        "INSERT INTO chatLog SET MapID = ?, Time= ?,Poster=?, Receiver='public', Content = ?",[data[1], time, session.uid, data[0]],
			function selectCb(err, results) {
			    if (err) {
			    }
			});
	});
	
	socket.on('node_iconadd', function (data) {
		if ( session != undefined) {
			socket.broadcast.emit('node_iconadd', data);
			var date = new Date();
			var time = date.getTime();
			client.query(
	        "INSERT INTO log SET mapid = ?, uname = ?, action = ?,content = ?, time = ?",[session.mapid,session.uname,'node_iconadd',data.toString(),time],
				function selectCb(err, results) {
				    if (err) {
//					throw err;
				    }
			});	
		}
	});
	
	socket.on('node_iconremove', function (data) {
		if ( session != undefined) socket.broadcast.emit('node_iconremove', data);
	});
	
	socket.on('node_iconremoveall', function (data) {
		if ( session != undefined) {
			socket.broadcast.emit('node_iconremoveall', data);
			var date = new Date();
			var time = date.getTime();
			client.query(
            "INSERT INTO log SET mapid = ?, uname = ?, action = ?,content = ?, time = ?",[session.mapid,session.uname,'node_iconremoveall',data.toString(),time],
				function selectCb(err, results) {
				    if (err) {
//					throw err;
				    }
			});
		}
	});	
	
	// 先去usersWS 用uname查uid
	// 以uid為key 在usersWS中抓到該筆socket
	// 如果有查到該socket 則對該使用者廣播
	// 若查無 傳回給自己msg_error訊息
	socket.on('privatemessage', function (data) { // 收到[to_uname,msg,prjID]
		if ( session != undefined) {
			var to_uname = data[0],
			msg = data[1],
			prjID = data[2];
		
			var target;
			for (var i in usersWS){ // 去usersWS中找到to_uname的socket 不考慮找到多組(名字重複)
				if (usersWS[i].handshake.session.uname == to_uname)
				{
					target = usersWS[i];
					break;
				}
			}
		
			if ( target ) {
				target.emit('privatemessage', [session.uname+'[私信]',msg,prjID]);
			
/*			client.query(
				"INSERT INTO chatLog SET MapID = ?, Time= ?,Poster=?, Receiver=?, Content = ?",[prjID, time, session.uname, to_uname, msg],
				function selectCb(err, results) {
				    if (err) {
				    }
			});
*/

			} else {
				socket.emit('messageerror', [to_uname,msg]);
			}
		
			//socket.broadcast.emit('publicmessage', [data[0],data[1],session.uname]); // 送出 msg prjID uname
		}
	});
	
	socket.on('nodediscuss', function (data) {
		if ( session != undefined) socket.broadcast.emit('nodediscuss', [data[0],data[1],data[2],session.uname]); // NodeID 討論內容本文 時間 發言人
	});	
	
	socket.on('renewfilelist', function (data) {
		if ( session != undefined) socket.broadcast.emit('renewfilelist', session.mapid); // NodeID 討論內容本文 時間 發言人
	});	
	
	socket.on('vediochat_private', function (data) { // 視訊聊天 data=to_uname
		if ( session != undefined) {
			var to_uname = data;
			var from_uname = session.uname;
		
			var to_uid,from_uid;
			for (var i in users){
				if (users[i]==to_uname)
					to_uid = i;
				if (users[i]==from_uname)
					from_uid = i;			
			}
			var target, source;
			for (var i in usersWS){
				if (usersWS[i].handshake.session.uid == to_uid)
				{
					target = usersWS[i];				
				}
				if (usersWS[i].handshake.session.uid == from_uid)
				{
					source = usersWS[i];				
				}
				if( source && target) break;
			}
		
			if ( source ) {
				source.emit('vediochat_private_local', [from_uname,to_uname,from_uid,to_uid]);
			}
			if ( target ) {
				target.emit('vediochat_private_remote', [from_uname,to_uname,from_uid,to_uid]);
			}
		}
	});	
	
	socket.on('vediochat_broadcast', function (data) { // 視訊廣播
		if ( session != undefined) {
			var from_uname = session.uname;
			var from_uid;
		
			for (var i in users){
				if (users[i]==from_uname) {
					from_uid = i;
					break;
				}
			}
		
			var source;
			for (var i in usersWS) {
				if (usersWS[i].handshake.session.uid == from_uid)
				{
					source = usersWS[i];
					break;				
				}
			}
		
			if ( source ) {
				source.emit('vediochat_broadcast_local', [from_uid]);
				socket.broadcast.emit('vediochat_broadcast_remote',[from_uname,from_uid]);
			}
		}
	});
	
	// 20120607 功能尚未放上去  
	socket.on('vediochat_broadcast_stop', function (data) {
		if ( session != undefined) {
			var from_uname = session.uname;
			var from_uid;
		
			for (var i in users){
				if (users[i]==from_uname) {
					from_uid = i;
					break;
				}
			}
		
			var source;
			for (var i in usersWS) {
				if (usersWS[i].handshake.session.uid == from_uid)
				{
					source = usersWS[i];
					break;
				}
			}
		
			if ( source ) {
				source.emit('vediochat_broadcast_stop_local', [from_uid]);
				socket.broadcast.emit('vediochat_broadcast_stop_remote',[from_uname,from_uid]);
			}
		}
	});
	
	socket.on('disconnect', function(){
		if ( session != undefined) {
			console.log(session.uname + ' disconnect');
		
			if(usersWS[uid]) {
				delete usersWS[uid];
			}		
			session = null;
			//socket.broadcast.emit('system message', '【'+name + '】无声无息地离开了。。。');
			refresh_online();
		}
	});
});

function refresh_online() {
	var n = [];
	for (var i in usersWS){
		n.push(usersWS[i].handshake.session.uname);
	}
	io.sockets.emit('online_list', n);
} 


//======================新增7/30=======================
app.post('/addProject',function(req,res){
    var data = req.body.Name;
    var date = new Date;
    var time = date.getTime(); //取得現在的時間
    //client.query("INSERT INTO '" + map + "' SET mapname=?,created=NOW(),isanonymity=?,creater=?,active=?,status=?",[data,'0','0','0','0'],
    //預設是 active = 1 專案管理的話請至後台更改
    client.query("INSERT INTO map SET mapname=?,created=?,isanonymity='0',creater=?,active='1',status='1',TotalBudget='0',StartTime=?,EndTime=? ",[data , time , req.session.uid,dataformat(time),dataformat(time)],    
        function(err,result){
            if(err){
                console.log('無法讀取資料庫資料');
            }
            else{
                console.log('新增成功 USER ID');
            }
        }
    );
    res.send(data);
});

//因為要得知新建立的mapid 所以要另外呼叫
app.post('/addProject1',function(req,res){
    var mapid;
    var creater;
//以下寫法 多引用query函數 避免client.query回傳的值因為 async的問題而回傳空的值
    function query(sql, callback) {
        console.log(sql);
        client.query( 'SELECT map.mapid,user.name FROM map Inner Join user on user.userId = map.creater WHERE ( creater=? and mapname=?)  ',[req.session.uid,req.body.Name] , function (error, results) {
            if (error) {
                res.send('failed');
                console.log('failed');
            }else{
            	fs.mkdir(__dirname + "/public/upload/" + results[0]['mapid'] ); // 建立檔案目錄 以供上傳用	
                console.log(results);
                callback(results[0]['mapid'],results[0]['name']);
            }
        });
    }

    
    query("  'SELECT mapid FROM map WHERE ( creater=? and mapname=?)',[req.session.uid,req.body.Name] ", function(Mapidresult,name) {
 
        var result = {  //用json把資料傳回去
            "mapID" : Mapidresult,
            "user" : name
        }
        
        console.log('the result is ' +result);
        res.send(result);
    });
});

app.post('/addProject2',function(req,res){
    console.log(req.body.Mapid);
    client.query("insert into accesscontrol  SET mapid=? , userId=?",[req.body.Mapid , req.session.uid],
    
        function(err,result){
             if(err){
                 console.log('accesscontrol新增失敗');
                 res.send('fail');
            }
            else{
                console.log('accesscontrol新增成功');
                res.send('success');
            }
        }
    );
});

app.post('/addNewProjectNodeInfo',function(req,res){
    var date = new Date;
    var time = date.getTime(); //取得現在的時間

    client.query("insert into node SET MapID=?,ParentNodeID='0',Content=?,ps='null',starttime=?,endtime='null',budget=0,leader=?,Creater=?,Created=?,Modifier=?,Modified=?,Position='0',islock='0',icon1='bookmark'",[req.body.Mapid,req.body.Name,date,req.body.creater ,req.session.uid,time,req.session.uid,date],
        function(err,result){
            if(err){
                console.log(err);
                res.send('fail');
            }else{
                res.send('success');
            }
        }
    );
});
     

      

//==============================================
//目前只可以從accesscontrol刪除資料 並不會將整個專案都刪掉
app.post('/delete',function(req,res){
    console.log('here'+req.body.Mapid);
    client.query("delete from accesscontrol where (mapid=? and userid =?)",[req.body.Mapid, req.session.uid],
        function(err,result){
            if(err){
                console.log('刪除失敗');
                res.send('fail to delete');
            }
            else{
                console.log('刪除成功');
                res.send('Success');
            }
        }
    );
});
        
app.post('/userid',function(req,res){
    client.query("select * from user where userid =?",[req.session.uid],
        function(err,result){
            if(err){
                console.log('fail');
                res.send('fail');
            }else{
                res.send(result[0]['name']);
            }
        }
    );
});
//0913 budget new
app.post('/projectDetail',function(req,res){
var leader,date,status;

console.log(req.body.Mapid);
    client.query("select map.created,map.status,user.name,map.TotalBudget,map.StartTime,map.EndTime from user inner join map on user.userId = map.creater where mapid =?",[req.body.Mapid],
        function(err,result){
            if(err){
                console.log('fail');
                res.send('fail');
            }else{
                console.log('success');
                console.log(result);
                res.send( JSON.stringify(result) );
                
            }
        }
    );
});

//////////////////////////////////////////////////////////////////////////
//var path = require('path');
//0921 介面更新 新增
app.post('/uploadUserpic', function (req, res) {

    var filename =  req.files.thumbnail.name;
    
    console.log(req.files.thumbnail.path);
	if (filename.length > 45) {
		res.send('failed');
		return;
	}
	// 取得文件上傳後的臨時路徑
	
	var tmp_path = req.files.thumbnail.path;
    console.log(tmp_path);
    // 設定文件上傳目錄
    var target_path = './public/pic/' + filename;
    //var target_path = './public/upload/' + mapid + '/' + filename;
    console.log('上傳路徑為:' + target_path);
    // 將文件更名 並移動到設定好的目錄下
	fs.rename(tmp_path, target_path, function(err) {
		if (err) {
//			throw err;
			console.log(err);
            console.log('I have been deleted');
			res.send('fail');
			//return;
		} else { 
		   client.query("Delete from userpicture where userid=?",[req.session.uid],
		   	function(err,results){
		   		if(err) console.log("delete picture fail");
		   		else{
	   			 	  client.query("INSERT INTO userpicture SET filename = ?, userid = ?", [filename, req.session.uid],
						function selectCb(err, results) {
				    		if (err) {
		                      console.log(err);

							fs.unlink(target_path, function(err) { 
						    if (err) console.log(err);
							});		
							}else {
		                        console.log('insert userpicture success');
								res.send('success');
		                       
							}
						}
					);
		   		}
		   	});
		}
		// 刪除臨時文件
		fs.unlink(tmp_path, function(err) { 
			if (err) console.log(err);
		});
	});
});

app.post('/getUserPicture',function(req,res){
     var userID = req.session.uid;
     client.query('select filename from userpicture where userid =?',[userID],
        function(err,results){
            if(err){
                console.log('fail');
            }
            else{
                console.log('GetUserPicture success');
                res.send(results);
            }
    });
});
//////////////////////////////////////conference added
app.post('/checkProjectOwner',function(req,res){
    console.log("mapid is "+req.session.mapid);
    //看mapid的creater 和 現在登錄的uid有沒有相符
    client.query("select creater from map where mapid =?",[req.session.mapid],
        function(err,results){
            if(err){ 
                console.log('err is' + err);
            }else{
                if(results[0]['creater'] == req.session.uid)  res.send('YES');
                else res.send('NO');
            }
        }
    );
});
app.post('/listProjectMember',function(req,res){ 
    console.log('here is ' +req.session.mapid); 
    client.query("select distinct name,user.userid from user left join accesscontrol on user.userid = accesscontrol.userId where mapid=?",[req.session.mapid],
        function(err,results){
            if(err){
                console.log(err);
            }else{
                var data ="";
                //onchange='java_script_:showPick(this.options[this.selectedIndex].value)' 這段是要顯示選出的member
                data += "<select id='memberSelect' size='7' style='width:100%;border:0' >";
                //這裡要將 本專案的負責人給排除
                for(var i=0;i< results.length;i++)
                    data += "<option value=" + results[i]['userid'] + ">"+results[i]['name']+"</option>";
                res.send(data);
            }
        }
    );
});

app.post('/listNodeMember',function(req,res){ 
    client.query("select distinct name,user.userid from user left join nodeaccesscontrol on user.userid = nodeaccesscontrol.userid where NodeId=?",[req.body.NodeID],
        function(err,results){
            if(err){
                console.log(err);
            }else{
                var data ="";
                //onchange='java_script_:showPick(this.options[this.selectedIndex].value)' 這段是要顯示選出的member
                data += "<select id='NodeMemberInclude' size='7' style='width:100%; border:0' >";
                for(var i=0;i< results.length;i++)
                    data += "<option value=" + results[i]['userid'] + ">"+results[i]['name']+"</option>";
                res.send(data);
            }
        }
    );
});

app.post('/islock',function(req,res){
var nodeID ; //儲存子節點的資訊
    updateNodeIslock(req.body.NodeID);
    function updateNodeIslock(NodeID){
      client.query("update node SET islock =? where NodeID=? or ParentNodeID=? ",[req.body.Islock ,NodeID,NodeID],
        function(err,result){
            if(err) console.log(err);
            else{//也要將子節點們全部都更新
                client.query("select nodeID from node where ParentNodeID=?",[NodeID],
                    function(err,result1){
                        if(err) console.log(err);
                        else if(result1 !=""){
                          for(var i=0; i<result1.length; i++)
                            updateNodeIslock(result1[i]['nodeID']);
                        }else res.send('update success');
                    }
                );
            }
        }
      );
    }
    console.log('islock success');
    
});

app.post('/AddNodeMember',function(req,res){
  addNodeMember(req.body.NodeID);
  function addNodeMember(Node){
        client.query("insert into nodeaccesscontrol (NodeID, userid) values(?,?)",[Node, req.body.Member],
            function(err,result){
                if(err) console.log(err);
                else if(result !=null){
                    client.query("select node.NodeID  from node where ParentNodeID=?",[Node],
                        function(err,result1){
                            if(err) console.log(err);
                            else if(result1 !=""){
                                for(var i=0;i<result1.length;i++)
                                    addNodeMember(result1[i]['NodeID']);
                            }else res.send("新增成功");
                        }
                    );
                }
            }
        );
    }
});

app.post('/DeleteNodeMember',function(req,res){
  DeleteNodeMember(req.body.NodeID);
  function DeleteNodeMember(Node){
    client.query("Delete nodeaccesscontrol from nodeaccesscontrol left join node on node.NodeID=nodeaccesscontrol.NodeID where (nodeaccesscontrol.NodeID =? and nodeaccesscontrol.userid=?)  or node.ParentNodeID=?",[Node,req.body.Member,Node],
        function(err,results,fields){
          if(err) console.log(err);
            client.query("select node.NodeID  from node where ParentNodeID=?",[Node],
                function(err,results1){
                  if(results1 !=""){
                    for(var i=0; i<results1.length;i++)
                        DeleteNodeMember(results1[i]['NodeID']);
                  }else  res.send('移除成功');
                }
            );
        });
    }
});

//From Ymap  function EVT_NodeClick(evt,nodeID) {
app.post('/getPermmit',function(req,res){
    client.query("select node.islock from node  where NodeID =?",[req.body.NodeID],
        function(err,result){
           if(err) console.log(err);
           else{
               if(result[0]['islock'] == 0) res.send('true1'); //沒有鎖住直接回傳可以的訊息
               else{ //查詢是否有再nodeaccesscontrol之中
                   client.query("select map.creater from map where map.mapid=?",[req.session.mapid],
                       function(err,result1){
                           if(err) console.log("select map.create fail");
                           else{
                               if(result1[0]['creater'] == req.session.uid) res.send('true2'); //若為該專案負責人 直接pass
                               else{
                                     client.query("select distinct nodeaccesscontrol.userid  from nodeaccesscontrol where userid=? and NodeID=?",[req.session.uid , req.body.NodeID],
                                        function(err,result2){
                                            if(err) console.log(err);
                                            else{//回傳空值表示沒有權限
                                                if(result2 == ""){
                                                    console.log('oh yes');
                                                    res.send('false');
                                                }else{
                                                    res.send('true3');
                                                }
                                             }
                                         }
                                     );
                                }
                            }
                        }
                    );
                }
            }
        }
    );
});

//0829 new
app.post('/getProjectMember',function(req,res){ //顯示詳細資訊的專案成員
    client.query("select distinct userpicture.filename, user.name from accesscontrol join user on accesscontrol.userid = user.userid join userpicture on userpicture.userid = accesscontrol.userid where mapid=?",[req.body.Mapid],
        function(err,result){
            if(err) console.log(err);
            else res.send(( JSON.stringify(result) ));
    });
});
            
//0829 new
app.post('/searchProjectMember',function(req,res){
 var hi = req.body.keyword;
 var searchName =hi.replace(/\s+/g, ""); //去除所有空白的
 console.log("here is " + searchName);
 if(searchName== "%%") res.send("");  //因為要key入資料庫 會有 %___%
 else{
   //找大頭貼用
   //client.query("select  user.name,user.userid,userpicture.filename from user left join userpicture on user.userid = userpicture.userid  where name like ?",[req.body.keyword],
    client.query("select user.name,user.userid from user  where name like ?",[req.body.keyword],
        function(err,result){
            if(err) console.log(err);
            else {
               console.log('getProjectMember success' + JSON.stringify(result) );
               var data ="";
               data += "<select id='showMemberSearchSelect' size='7' style='width:100%; height:100%;border:0' >";
               for(var i=0; i<result.length;i++){
                   data += "<option value=" + result[i]['userid'] + ">"+result[i]['name']+"</option>";
                }
                data +="</select>";
               res.send(data);
            }
    });
  }
});
//在專案管理頁面的顯示專案成員
app.post('/listProjectMember1',function(req,res){ 
   
    client.query("select distinct userpicture.filename, name,user.userid from user left join accesscontrol on user.userid = accesscontrol.userId join userpicture on user.userid=userpicture.userid where mapid=?",[req.body.Mapid],
        function(err,results){
            if(err){
                console.log(err);
            }else{
                var data ="";
                //onchange='java_script_:showPick(this.options[this.selectedIndex].value)' 這段是要顯示選出的member
                data += "<select id='AccessMember' size='7' style='width:100%; height:100%;border:0' >";
                //這裡要將 本專案的負責人給排除
                for(var i=0;i< results.length;i++)
                    data += "<option value=" + results[i]['userid'] +" data-image='/pic/"+results[i]['filename']+"'>"+results[i]['name']+"</option>";
                res.send(data);
            }
        }
    );
});
//0829 new
app.post('/AddProjectMember',function(req,res){
    client.query("insert into accesscontrol set mapid=?,userid=?",[req.body.Mapid,req.body.Member],
        function(err,result){
           if(err) console.log(err);
           else{

               res.send('新增成功');
           }
       }
   );
});

//1010DEMO修改
app.post('/checkExistMember',function(req,res){
    client.query("select userId from accesscontrol where userId=? and mapid=?",[req.body.Member,req.body.Mapid],
        function(err,result){
        	console.log("check" +result);
           if(err) console.log(err);
           else{
           	   if(result!="")
                  res.send('OK');
               else{
               	  res.send("Nodata");
               	  
               }
               
           }
       }
   );
});


app.post('/DeleteProjectMember',function(req,res){
    client.query("Delete from accesscontrol where (mapid=? and userid=?)",[req.body.Mapid,req.body.Member],
        function(err,result){
           if(err) console.log(err);
           else{
               res.send('新增成功');
           }
       }
   );
});

app.post('/projectNameinSearch',function(req,res){
    client.query("select map.mapname from map where mapid =?",[req.body.Mapid],
        function(err,result){
           if(err) console.log(err);
           else{
               
               res.send(result[0]['mapname']);
           }
       }
   );
});
//150905 巫 留言版
app.post('/MSGboard_onload',function(req,res){//mapid:prjID
	client.query(
	"SELECT * FROM `msgboard` WHERE `mapid`=? ORDER BY `msgboard`.`id` DESC",[req.body.mapid],
        function(err,result){
           if(err) console.log(err);
           else{
			   console.log('g222222222222222');
               res.send(JSON.stringify(result));
           }
       }
   );
});
app.post('/MSGboard_upload',function(req,res){//mapid:prjID,uname:uname,time:Time,content:msg
	var Content = req.body.content,
		poster = req.body.uname;
    client.query("INSERT INTO `mindweb`.`msgboard` (`poster`, `time`, `content`, `mapid`, `active`) VALUES (?, ?, ?, ?, '1')",[poster,req.body.time,Content,req.body.mapid],
        function(err,result){
           if(err) console.log(err);
           else{
               res.send('留言成功');
           }
       }
   );
});
//0901 TodoList  //0912 修改
app.post('/getTodoList',function(req,res){
    client.query("select ListID,Listname,isFinish from nodetodolist where NodeID = ?",[req.body.NodeID],
        function(err,result){
            if(err) console.log('fail');
            else{
                if(result==""){
                    console.log('null');
                    res.send("");
                }
                else{
                    console.log("getTodoList success");
                    var data= "";
                    for(var i=0; i<result.length;i++){
                      if(result[i]['isFinish'] == 1) //如果完成則打勾
                          data += "<input type='checkbox' style='width:50px;height:12px;font-size:16px' name='Todolist"+result[i]['ListID'] +" ' value='checked' id='Todolist"+result[i]['ListID'] +" ' onchange=' refreshListStatue("+result[i]['ListID']+")' checked>"+result[i]['Listname']+"";
                      else
                          data += "<input type='checkbox' style='width:50px;height:12px;font-size:16px'  name='Todolist"+result[i]['ListID'] +" ' value='checked' id='Todolist"+result[i]['ListID'] +" ' onchange=' refreshListStatue("+result[i]['ListID']+")'>"+result[i]['Listname']+"";
                      data +="</br>";
                    }
                    res.send(data);
                }
            }
    });
});

app.post('/newList',function(req,res){
    client.query("insert into nodetodolist set NodeID=?,Listname=?,isFinish=?",[req.body.NodeID,req.body.Name,req.body.isFinish],
        function(err,result){
           if(err) console.log('newList fail');
           else{
              console.log('newnodeList success');
              res.send('OK');
           }
        }
    );
});

//0912 修改
app.post('/updateNodeList',function(req,res){

    client.query("update nodetodolist set nodetodolist.isFinish=? where nodetodolist.ListID=?",[req.body.IsFinish,req.body.ListID1],
        function(err,result){
           if(err) console.log('newNodeContent fail');
           else{
              console.log('newnodeContent success');
              res.send('OK');
           }
        }
    );
});

app.post('/updateNodeText',function(req,res){
    client.query("update node set node.Content=? where node.NodeID=?",[req.body.Name,req.body.NodeID],
        function(err,result){
           if(err) console.log('newNodeContent fail');
           else{
              console.log('newnodeContent success');
              res.send('OK');
           }
        }
    );
});

//0912 new 節點名稱 修改
app.post('/getnodename',function(req,res){
    client.query("select node.Content from node where node.NodeID=?",[req.body.NodeID],
        function(err,result){
           if(err) console.log('newNodeContent fail');
           else{
              console.log('newnodeContent success');
              res.send(result[0]['Content']);
           }
        }
    );
});
//0919行事曆修改 新增
app.post('/settingProjectStatus',function(req,res){
	console.log(req.body.Status);
	client.query("update map set map.status =?, map.StartTime=? ,map.EndTime=? where map.mapid=? ",[req.body.Status,req.body.StartDay,req.body.EndDay,req.body.Mapid],
		function(err,result){
        	if(err) console.log('settingProjectStatusFail');
        	else{
        		console.log('settingProjectStatus OK');
        		res.send("ok");
        	}
    });
});

app.post('/checkProjectOwnerOption',function(req,res){
    //看mapid的creater 和 現在登錄的uid有沒有相符
    client.query("select creater from map where mapid =?",[req.body.Mapid],
        function(err,results){
            if(err){ 
                console.log('checkProjectOwnerOption' + err);
            }else{
            	console.log(results[0]['creater']);
            	if(results[0]['creater'] == req.session.uid)
            		res.send("YES");
            	else
                    res.send('NO');
            }
        }
    );
});

// app.post('/calculateBudget',function(req,res){
// 	client.query("select") 
// }

app.post('/projectBudgetUpdate',function(req,res){
	client.query("update map set map.TotalBudget = ? where map.mapid=?",[req.body.projectBudget, req.body.Mapid],
		function(err,result){
			if(err){
				console.log("budget error");
			}else{
				console.log("budgetupdate success");
				res.send("update projectBudgetUpdate success");

			}
		
	});
});

app.post('/getChildNodeBudget',function(req,res){
	client.query("select node.budget,map.TotalBudget, node.Content from node left join map on map.mapid=node.MapID where node.MapID=? and node.ParentNodeID > 0 and node.budget > 0 ",[req.session.mapid],
		function(err,result){
            if(err){
            	console.log("getChildNodeBudget error");
            	console.log(err);
            }else{
            	res.send(result);
                
            }
	});
});

// app.post('/AddNodeMember',function(req,res){
//   addNodeMember(req.body.NodeID);
//   function addNodeMember(Node){
//         client.query("insert into nodeaccesscontrol (NodeID, userid) values(?,?)",[Node, req.body.Member],
//             function(err,result){
//                 if(err) console.log(err);
//                 else if(result !=null){
//                     client.query("select node.NodeID  from node where ParentNodeID=?",[Node],
//                         function(err,result1){
//                             if(err) console.log(err);
//                             else if(result1 !=""){
//                                 for(var i=0;i<result1.length;i++)
//                                     addNodeMember(result1[i]['NodeID']);
//                             }else res.send("新增成功");
//                         }
//                     );
//                 }
//             }
//         );
//     }
// });

app.post('/getBudgetInfo',function(req,res){
	//node.ps 是已花費的預算
    client.query("select node.Content, node.budget,node.ps,node.FinishDate from node where node.MapID =? and node.ParentNodeID >0",[req.session.mapid],
        function(err,result){
        	if(err)  console.log(err);
        	else{
        		console.log("getBudgetInfo success");
        		res.send(result);
        	}
        }
    )
});

app.post('/ChartCheck',function(req,res){
    client.query("SELECT * FROM map where mapid=?",[req.body.MapID],
        function(err,result){
        	if(err)  console.log(err);
        	else{
				if(result[0]['status'] != '1'){
					res.send("yes");
				}else	res.send("no");
        	}
        }
    )
});

app.post('/uploadxml', function (req, res) {
	console.log(req.files.thumbnai.name);
    var filename =  req.files.thumbnai.name;
	var tmp_path = req.files.thumbnai.path;
    var target_path = __dirname+'/public/xml/' + filename;
    console.log('上傳路徑為:' + target_path);
	fs.rename(tmp_path, target_path, function(err) {
		if (err) {
			console.log(err);
			res.send('fail');
		} else {
		}
	})
	/*
	fs.unlink(tmp_path, function(err) { 
		if (err) console.log(err);
	});
	*/
	for(var i=0;i<200000000;i++){
		//timing
	}
	//convert xml to json
	
	var xml2js = require('xml2js');
	var filePath = target_path;
	var jsonx;
	try {
		var fileData = fs.readFileSync(filePath, 'UTF-8');
		var parser = new xml2js.Parser();       
		parser.parseString(fileData.substring(0, fileData.length), function (err, result) {
			 jsonx = JSON.stringify(result);
		});
		console.log("File '" + filePath + "/ was successfully read.\n");
		console.log(jsonx);
	} 
	catch (ex) {
		console.log("Unable to read file '" + filePath + "'.");
		console.log(ex);
	}
	//json解析
	res.send(jsonx);
	/*
	console.log('1+++ '+j.mapdata.NodeID);
	console.log('2+++ '+j.mapdata.Content);
	console.log('3+++ '+j.mapdata.Childs.length);
	console.log(j);
	*/
});
app.post('/XML_newNode',function(req,res){
	if(req.body.has_image=="0"){
		console.log("app.post:/XML_newNode start   mapid="+req.body.MapID);
		client.query("insert into node SET MapID=?,ParentNodeID=?,Content=?,ps=?,starttime=?,endtime=?,budget=?,leader=?,Creater=?,Created=?,Modifier=?,Modified=?,Position=?,islock='0'",[req.body.MapID,req.body.ParentNodeID,req.body.Content,req.body.ps,req.body.starttime,req.body.endtime,req.body.budget,req.body.leader,req.body.Creater,req.body.created,req.body.Modifier,req.body.Modified,req.body.Position], //req.body.Position,req.body.icons
		function(err,result){
        	if(err)  console.log(err);
        	else{
        		console.log("XML_newNode success = "+req.body.Content);
				client.query("SELECT LAST_INSERT_ID()",function(err2,result2){
					if(err)  {
						console.log("LAST_INSERT_ID ERROR:" +err);
					}else{
						var NewNodeID = result2[0]['LAST_INSERT_ID()'];
						var NewNodeID2 = String(NewNodeID);
						console.log("LAST_INSERT_ID"+NewNodeID2);
						res.send(NewNodeID2);
						}
					}); 
				}
			}
		)
	}else if(req.body.has_image=="1"){
		console.log("app.post:/XML_newNode start   mapid="+req.body.MapID);
		client.query("insert into node SET MapID=?,ParentNodeID=?,Content=?,ps=?,starttime=?,endtime=?,budget=?,leader=?,Creater=?,Created=?,Modifier=?,Modified=?,Position=?,islock='0',icon1=?",[req.body.MapID,req.body.ParentNodeID,req.body.Content,req.body.ps,req.body.starttime,req.body.endtime,req.body.budget,req.body.leader,req.body.Creater,req.body.created,req.body.Modifier,req.body.Modified,req.body.Position,req.body.icons], //req.body.Position,req.body.icons
		//client.query("insert into node SET MapID=?,ParentNodeID=?,Content=?,ps=?,starttime=?,endtime=?,budget=?,leader=?,Creater=?,Created=?,Modifier=?,Modified=?,Position=?,islock='0'",[req.body.MapID,req.body.ParentNodeID,req.body.Content,req.body.ps,req.body.starttime,req.body.endtime,req.body.budget,req.body.leader,req.body.Creater,req.body.created,req.body.Modifier,req.body.Modified,req.body.Position], //req.body.Position,req.body.icons
		function(err,result){
        	if(err)  console.log(err);
        	else{
        		console.log("XML_newNode success = "+req.body.Content);
				client.query("SELECT LAST_INSERT_ID()",function(err2,result2){
					if(err)  {
						console.log("LAST_INSERT_ID ERROR:" +err);
					}else{
						var NewNodeID = result2[0]['LAST_INSERT_ID()'];
						var NewNodeID2 = String(NewNodeID);
						console.log("LAST_INSERT_ID"+NewNodeID2);
						res.send(NewNodeID2);
						}
					}); 
				}
			}
		)
	}
});       

app.post('/getPosition',function(req,res){
	console.log("app.post:/getPosition start - " +req.body.NodeID);
	client.query("SELECT * FROM `node` where NodeID=?",[req.body.NodeID], //req.body.Position,req.body.icons
       function(err,result){
        	if(err)  console.log(err);
        	else{
        		console.log("getPosition success");
				console.log("position = "+result[0]['Position']);
				var x=result[0]['Position'];
				var x1 = String(x);
				if(x==0)
					res.send('0');
				if(x==1)
					res.send('1');
				if(x==2)
					res.send('2');
        	}
        }
    )
});

//0916 甘特圖new
app.post('/getNodetInfo',function(req,res){
	//node.ps 是已花費的預算
    client.query("select node.Content,node.starttime,node.endtime from node where node.MapID =? and node.ParentNodeID >0",[req.session.mapid],
        function(err,result){
        	if(err)  console.log(err);
        	else{
        		console.log("getBudgetInfo success");
        		res.send(result);
        	}
        }
    )
});
//0916 甘特圖new
app.post('/getProjectInfo',function(req,res){
	//node.ps 是已花費的預算
    client.query("select node.Content,node.starttime,node.endtime from node where node.MapID =? and node.ParentNodeID =0",[req.session.mapid],
        function(err,result){
        	if(err)  console.log(err);
        	else{
        		console.log("getProjectInfo success");
        		console.log(result);
        		res.send(result);
        	}
        }
    )
});

app.post('/ProjectCalendar',function(req,res){

    client.query("select map.StartTime,map.EndTime,map.mapname from map left join accesscontrol on accesscontrol.mapid=map.mapid where userId=? ",[req.session.uid],
        function(err,results){
        	if(err) console.log(err);
        	else{
        		console.log(results);
        		res.send(results);
        	}
    });
});

app.post('/getuserData',function(req,res){
    client.query("select * from user where userid=?",[req.session.uid],
    	function(err,results){
    	  if(err) console.log(err);
    	  else{	
 			console.log('get userdata success');
 		    res.send(JSON.stringify(results));
 		  }	
    });
});

app.post('/SetPersonData',function(req,res){
   client.query("update user set sex=?,email=?,job=?,company=?,intro=? where userid=?",[req.body.Sex,req.body.Email,req.body.Job,req.body.Company,req.body.Intro,req.session.uid],
   	function(err,results){
   		if(err) console.log("setPersondata fail");
   		else{
   			res.send("setPersondata success");
   		}
   	})
});

app.post('/SendPersonMessage',function(req,res){
    client.query("insert into messagelog Set sender=?,receiver=?,content=?,sendTime=?,title=?",[req.session.uid, req.body.UserID,req.body.Content,req.body.Time,req.body.Title],
    	function(err,results){
    		if(err){
    			console.log(err);
    			console.log("sendMessage fail");
    		} 
    		else{
    			console.log("sendMessage success");
    			res.send("sendMessage success");
    		}
    });
});

app.post('/loadMessage',function(req,res){
    client.query("select user.name, messagelog.title, messagelog.MID, messagelog.sender,messagelog.receiver,messagelog.content,messagelog.SendTime,userpicture.filename from messagelog join userpicture on messagelog.sender = userpicture.userid join user on user.userid = messagelog.sender where receiver=? and messagelog.sender=userpicture.userid order by messagelog.SendTime DESC ",[req.session.uid],
    	function(err,results){
    		if(err){
    			console.log(err);
    			console.log("loadMessage fail");
    		} 
    		else{
    			console.log("loadMessage success");

    			res.send(JSON.stringify(results));
    		}
    });
});

app.post('/showMessageContent',function(req,res){
    client.query("select messagelog.sender,messagelog.content,messagelog.title,messagelog.SendTime from messagelog where messagelog.MID=?",[req.body.ID],
    	function(err,results){
    		if(err) console.log("showmessagecontent fail");
    		else{
    			console.log("showmessagecontent success");
    			res.send(JSON.stringify(results));
    		}
    });
});

app.post('/addfriend',function(req,res){
	client.query("insert into userfriend set owner=?,follower=?",[req.session.uid,req.body.Userid],
		function(err,results){
			if(err){
				 console.log(err);
				 console.log("addfriend fail");
				 res.send("fail");
			}
			else{
				console.log("addfriend success");
				res.send("OK");
			}
	});
});

app.post('/showfriend',function(req,res){
	client.query("select user.name,userfriend.follower from userfriend join user on userfriend.follower=user.userid where userfriend.owner=?",[req.session.uid],
		function(err,results){
			if(err){
				 console.log(err);
				 console.log("showfriend fail");
			}
			else{
				console.log("addfriend success");

				res.send(JSON.stringify(results));
			}
	});
});

app.post('/getFriendUserpicture',function(req,res){
	client.query("select userpicture.filename from userpicture where userid=?",[req.body.Userid],
		function(err,results){
			if(err) console.log("getFriendUserpicture fail");
			else{
				console.log(JSON.stringify(results));
 				console.log("getFriendUserpicture success");

				res.send(JSON.stringify(results));
			}
		});
});


app.post('/getFriendData',function(req,res){
    client.query("select * from user where userid=?",[req.body.Userid],
    	function(err,results){
    	  if(err) console.log(err);
    	  else{	
 			console.log('get frienddata success');
 			console.log(JSON.stringify(results));
 		    res.send(JSON.stringify(results));
 		  }	
    });
});

app.post('/checkNodeEditStatus',function(req,res){
	client.query("select islock from node where NodeID =?",[req.body.NodeID],
		function(err,results){
			if(err) console.log("checkNodeEditStatus error");
			else{
				console.log("checkNodeEditStatus success");
				console.log("the results is "+results[0]['islock']);
				res.send(JSON.stringify(results));
				
			}
	});
});

app.post('/saveLockstatus',function(req,res){
	client.query("update node set islock=? where NodeID =?",[req.body.Status,req.body.NodeID],
		function(err,resutls){
			if(err) console.log("saveLockstatus fail");
			else{
				res.send("success");
			}
	});
});