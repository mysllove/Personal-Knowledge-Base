


















                                    //创建NODE.js应用
                                            //步骤一、引入 required 模块 --require 引入 Node.js 自带的 http 模块
                                                    const http = require('http');
                                            //步骤二、创建服务器
                                                    http.createServer(function(request,response){//调用 http 模块提供的函数 =>createServer
                                                        response.writeHead(200,{'content-Type':'text/html'})//向请求的客户端发送响应头
                                                        /*          
                                                            *该格式可以识别HTML结构，编码格式是UTF-8
                                                                res.writeHead(200,{'Content-Type':'text/html;charset=UTF8'});
                                                            *该格式可以识别普通文本
                                                                res.writeHead(200,{'Content-Type':'text/plain;charset=UTF8'});
                                                            *该格式识别图片
                                                                res.writeHead(200,{'Content-Type':'image/jpg;charset=UTF8'});
                                                            该格式识别样式
                                                                res.writeHead(200,{'Content-Type':'text/css;charset=UFT8'});
                                                        */
                                                       response.write('<h1>Node.js</h1>');
                                                        response.end('<h2 style="color:red">8888</h2>')//结束响应，告诉客户端所有消息已经发送
                                                    }).listen(8888)

                                console.log('Server running at http://127.0.0.1:8888/');


                                const express = require('express')

























