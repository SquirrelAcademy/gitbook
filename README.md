## 关于松鼠学苑

- 松鼠学苑是大数据与人工智能领域的原创研究型组织，这种组织是松散的、不以盈利为目的的，可类比于常见的开源项目的组织形式。
- 任何个人均可参与松鼠学苑的建设，开放自己的研究成果，如文章、课程、开源项目，这些成果所产生的全部价值（署名、收益）均归原创者所有。
- 松鼠学苑接受其他社会团体的资助，以转移/转化我们的研究成果。

---

## 课程体系

**Spark 快速大数据处理 <button class="section" target="spark" show="详情" hide="收起"></button>**
([课程地址](https://edu.csdn.net/course/detail/24205))

 <!--sec data-title="详情" data-id="spark" data-show=false ces-->

| 序号 | 课程                         | 详细                                                         |
| ---- | ---------------------------- | ------------------------------------------------------------ |
| 1    | 课程总体介绍                 | 大数据的概念，开发环境，集群拓扑                             |
| 2    | ZooKeeper-分布式过程协同组件 | 什么是分布式过程协同，分布式过程协同架构设计的难点，为什么选择ZooKeeper，环境搭建，案例：锁，案例：主从应用 |
| 3    | Hadoop3-大数据基础组件       | YARN HA/HDFS HA<br/>HDFS：HDFS基本原理与基本操作，HDFS HA配置文件详解，HDFS Federation/ViewFS；<br/>MapReduce：MR基本原理，MR编程实战_Java版本例子，MR编程实战_Python版本例子，MR内部机制与调优，MR编程实战: 任务级联+MR Tools；<br/>YARN：YARN的产生背景，YARN架构，YARN基本命令操作，RM HA配置，调度器配置，YARN应用编程实战 |
| 4    | Tez-Yarn底层计算引擎         | 架构与特征，基于Tez的DAG案例程序                             |
| 5    | Hive-大数据仓库              | Hive架构，基本命令行操作，HiveQL数据定义，HiveQL查询，Hive锁，Hive调优 |
| 6    | Spark快速大数据处理          | 和MR/Tez/Flink对比，Hive On Spark vs <br/>Spark On Hive，SparkSQL例子，Spark编程模型，安装Anaconda、安装Jupyter、安装Toree，SparkSQL/DataFrame API，<br/>淘宝用户行为分析案例-用户行为分析-任务1-用户访问流量分布分析-PV，<br/>淘宝用户行为分析案例-用户行为分析-任务2-用户活跃度分析-DAU，<br/>淘宝用户行为分析案例-用户行为分析-Jupyter/Spark内存故障处理，<br/>淘宝用户行为分析案例-用户行为分析-任务3-客单量分析，<br/>淘宝用户行为分析案例-商品分析-任务1-商品PV各环节转化率，<br/>Structured Streaming API，<br/>集群环境对称处理 |
| 7    | Oozie-大数据流程引擎         | 大数据工作流引擎与应用系统工作流引擎的区别，Oozie架构与流程，编译、make sharelib、安装client和server，<br/>编程案例-Cron Action，<br/>编程案例-Shell Action，<br/>编程案例-MR Action，<br/>编程案例-Spark Action，<br/>编程案例-PySpark Action，<br/>编程案例-Hive2 Action |

<!--endsec-->



**Flink实时大数据处理** <button class="section" target="flink1" show="详情" hide="收起"></button>

 <!--sec data-title="详情" data-id="flink1" data-show=false ces-->

| 序号 | 课程                | 详细                                                         |
| ---- | ------------------- | ------------------------------------------------------------ |
| 1    | KafKa分布式消息队列 | 分布式消息队列概念，消息队列的选型比较，KafKa体系架构，组件间交互过程，Consumer与Producer案例程序分析 |
| 2    | 流处理理论          | 时间，水印，窗口，触发器，迟到生存期，累加模式；开窗案例分析 |
| 3    | Flink编程模型       | 组件栈，流式计算模型，运行时结构，任务调度，物理执行计划     |
| 4    | 流处理API           | 时间处理，算子，窗口，连接器，状态管理，检查点，RichFunction |
| 5    | 批处理API           | 程序结构，算子，文件缓存，广播变量，容错机制，迭代，注解     |
| 6    | 关系型API           | 关系型API原理，程序基本结构，动态表理论，持续查询            |
| 7    | 复杂事件处理        | CEP理论，模式匹配，模式输出，与DataStream API、关系型API的区别与联系 |
| 8    | 部署与监控          | YARN部署模式，任务提交，监控方法                             |

<!--endsec-->



**Flink与实时机器学习** <button class="section" target="flink2" show="详情" hide="收起"></button>

 <!--sec data-title="详情" data-id="flink2" data-show=false ces-->

| 序号 | 课程                                  | 详细                                                         |
| ---- | ------------------------------------- | ------------------------------------------------------------ |
| 1    | 机器学习的基本概念KafKa分布式消息队列 | 人工智能发展历程，NFL定理，模型选择，线性模型                |
| 2    | 机器学习进阶                          | 决策树，神经网络，支持向量机，贝叶斯方法，聚类方法，维度变换，特征选择，强化学习 |
| 3    | 深度学习                              | 机器学习任务本质抽象，前反馈网络，反向传播，梯度与正则化，卷积网络，循环网络，概率模型，信念网络与玻尔兹曼机 |
| 4    | FlinkML                               | 机器学习引擎架构设计，流水线，分类算法架构设计，推荐算法架构设计 |
| 5    | 机器学习实战-Python                   | 根据学员特点选择机器学习方法进行案例实战                     |
| 6    | 机器学习实战-Scala                    | 根据学员特点选择机器学习方法进行案例实战                     |

<!--endsec-->



**Hadoop 集群自动化项目-HFS <button class="section" target="hadoop" show="详情" hide="收起"></button>**

 <!--sec data-title="详情" data-id="hadoop" data-show=false ces-->

| 序号 | 课程          | 详细                                                         |
| ---- | ------------- | ------------------------------------------------------------ |
| 1    | Linux操作系统 | Linux操作系统组成，任务调度原理，bash特征，shell脚本开发     |
| 2    | LFS简介       | 自动化方法论，LFS的设计思想，基本过程演示                    |
| 3    | HFS           | HFS的顶层框架，各模块设计：1InstallBaseEnv，2SetupSSHEnv，3Zookeeper，4Hadoop，5Tez，8Hive，9Spark，11Oozie，12Docker，commonLib，installVBScript |

<!--endsec-->



**大数据处理思想发展史 <button class="section" target="history" show="详情" hide="收起"></button>**

 <!--sec data-title="详情" data-id="history" data-show=false ces-->

| 序号 | 课程               | 详细                                                     |
| ---- | ------------------ | -------------------------------------------------------- |
| 1    | Google闭源阶段     | MR、BigTable、GFS                                        |
| 2    | Hadoop开源         | MR、HDFS、YARN、Hadoop生态                               |
| 3    | 计算引擎-批处理    | Flume、Storm、Spark                                      |
| 4    | 计算引擎-流处理    | Spark、DataFlow、KafKa、Flink、Beam                      |
| 5    | 计算引擎发展方向论 | 大数据变革的动力，大数据的本质，大数据计算引擎的发展方向 |
| 6    | SQL引擎            | Calcite、分布式数据库理论发展                            |

<!--endsec-->

---

## 出版物

[购买链接](https://item.jd.com/12589198.html)

![深入理解 Flink](https://img30.360buyimg.com/vc/jfs/t1/32864/16/12587/567184/5cb7e8eaE3bf6aa98/0dfbb8e9e910d9c9.jpg)
