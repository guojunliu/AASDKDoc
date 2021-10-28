[1. 概述](#jump1)<br>
[2. 无参数事件](#jump2)<br>
[3. 单参数事件](#jump3)<br>
[4. 多参数事件](#jump4)<br>
[5. 计数打点](#jump5)<br>

------------

# <span id="jump1">1. 概述</span>
统计包扩展多种打点 API，以满足不同业务的打点需求。

&ensp;
# <span id="jump2">2. 无参数事件</span>

```java
void log(String key);
```

参数说明

|参数名|说明|
|:----  |-----   |
|key |自定义统计事件名称，字符长度限制在 128 以内。  |


调用示例：
```java
ALYAnalysis.log("game_start");
```
&ensp;
# <span id="jump3">3. 单参数事件</span>
```java
void log(String key, String value);
```
参数说明

|参数名|说明|
|:----  |-----   |
|key |自定义统计事件名称，字符长度限制在 128 以内。   |
|value | 统计事件的内容，字符长度限制在 32K 以内。  |

调用示例：
```java
ALYAnalysis.log("game_resume", "duration:30000");
```
&ensp;
# <span id="jump4">4. 多参数事件</span>
```java
void log(String key, Map<String, String> value);
```

参数说明

|参数名|说明|
|:----  |-----   |
|key |自定义统计事件名称，字符长度限制在 128 以内。   |
|value | 统计事件内容，内容格式为 Key-Value 形式的 Map，转换后的字符长度限制在 32K 以内。  |


调用示例：

```java
HashMap<String, String> map = new HashMap<>();
map.put("name", "Jack.Lin");
map.put("level", "35");
map.put("star", "4");
ALYAnalysis.log("game_level_pass", map);
```
&ensp;
# <span id="jump5">5. 计数事件</span>
```java
void count(String key);
```

参数说明

|参数名|说明|
|:----  |-----   |
|key |自定义统计事件名称，字符长度限制在 128 以内。  |

调用示例：
```java
ALYAnalysis.count("game_level_pass");
```