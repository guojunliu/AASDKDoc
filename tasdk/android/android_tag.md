[1. 概述](#jump1)<br>
[2. 获得推广用户标签](#jump2)<br>
[3. 获得付费用户标签](#jump3)<br>
[4. 获得用户广告标签](#jump4)<br>
[5. 获得DeepLink数据](#jump5)<br>
[6. 获得AbTest数据](#jump6)<br>


------------
# <span id="jump1">1. 概述</span>

用户标签分为推广用户标签,付费用户标签,用户广告标签。
如果游戏中需要获得用户标签，请使用以下 API 来进行获取。
&ensp;

# <span id="jump2">2. 获得推广用户标签</span>

## <span >2.1 添加AppsFlyer</span>

如果您已添加AppsFlyer到您的项目中，请忽略此步骤

```java
dependencies {
      implementation 'com.appsflyer:af-android-sdk:5.2.0'
}
```
## <span >2.2 引入ALYAnalysis</span>
所有方法均以 static 定义在 `ALYAnalysis` 类中，请将 **ALYAnalysis** 引用至 Java 代码中。
```java
import com.aly.sdk.ALYAnalysis;
```
&ensp;
## <span >2.3 获得用户标签</span>
请从下方API中任选其一进行调用。
> 请在初始化成功之后调用

#### <span >2.3.1  参数类型是Map</span>

```java
getConversionData(Map<String, Object> conversionData, AFConversionDataResultListener afConversionDataResultListener) ;
```

#### <span >2.3.2  参数类型是String</span>

```java
getConversionData(String conversionData, AFConversionDataResultListener afConversionDataResultListener) ;
```


参数说明

| 参数名                         | 说明                      |
| :----------------------------- | ------------------------- |
| conversionData                 | Appsflyer中返回的归因结果 |
| AFConversionDataResultListener | 结果回调                  |

调用示例：

```java
  ALYAnalysis.getConversionData(conversionData, new AFConversionDataResultListener() {
                    @Override
                    public void onSuccess(String data) {
                        Log.i("tag", "onSuccess: "+data); // 用户分级返回值
                    }

                    @Override
                    public void onFail(String s) {
                        Log.i("tag", "onFail: "+s); 
                    }
                });
            }
```
&ensp;
## <span >2.4 最佳实践</span>

```java
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // ...
        
        private static final String AF_DEV_KEY = "your appsflyer key";
        ALYAnalysis.enalbeDebugMode(true);
        ALYAnalysis.init(getApplicationContext(), "productid", "channelId");

        AppsFlyerConversionListener conversionListener = new AppsFlyerConversionListener() {
            @Override
            public void onConversionDataSuccess(Map<String, Object> conversionData) {
                ALYAnalysis.getConversionData(conversionData, new AFConversionDataResultListener() {
                    @Override
                    public void onSuccess(String data) {
                        Log.i("tag", "onSuccess: "+data); // 其中data就是用户分级的返回值
                    }

                    @Override
                    public void onFail(String s) {
                        Log.i("tag", "onFail: "+s);
                    }
                });
            }

            @Override
            public void onConversionDataFail(String errorMessage) {
              // no need
            }

            @Override
            public void onAppOpenAttribution(Map<String, String> conversionData) {
               // no need
            }

            @Override
            public void onAttributionFailure(String errorMessage) {
                // no need
            }
        };
        AppsFlyerLib.getInstance().init(AF_DEV_KEY, conversionListener, getApplicationContext());
        AppsFlyerLib.getInstance().startTracking(getApplication());

}
```
# <span id="jump3">3. 获得付费用户标签</span>

### <span >3.1 调用API </span>

> 请在初始化成功之后调用

```java
public static void getPayUserLayerData(PayUserLayerDataListener listener);

```

参数说明

| 参数名                         | 说明                      |
| :----------------------------- | ------------------------- |
| PayUserLayerDataListener | 结果回调                  |

调用示例：

```java
ALYAnalysis.getPayUserLayerData(new PayUserLayerDataListener() {
            @Override
            public void onSuccess(String s) {
                Log.i(TAG, "onSuccess: PayUserLayer :"+s);
            }

            @Override
            public void onFail(String s) {
                Log.i(TAG, "onFail: PayUserLayer :"+s);

            }
        });
```

# <span id="jump4">4. 获得用户广告标签</span>

### <span >4.1 调用API </span>

> 请在初始化成功之后调用

```java
public static void getUserAdLayerData(UserAdLayerDataListener listener);

```

参数说明

| 参数名                         | 说明                      |
| :----------------------------- | ------------------------- |
| UserAdLayerDataListener | 结果回调                  |

调用示例：

```java
ALYAnalysis.getUserAdLayerData(new UserAdLayerDataListener() {
            @Override
            public void onSuccess(String s) {
                Log.i(TAG, "onSuccess: userAdLayer :"+s);
            }

            @Override
            public void onFail(String s) {
                Log.i(TAG, "onFail: userAdLayer :"+s);

            }
        });
```
# <span id="jump5">5. 获得DeepLink数据</span>

### <span >5.1 调用API </span>

> 请在初始化成功之后调用,以下方法任选其一

```java
public static void getDLData(String conversionData, UserDlLayerDataListener dlLayerDataListener);

public static void getDLData(Map<String, Object> conversionData, UserDlLayerDataListener dlLayerDataListener);

```

参数说明

| 参数名                         | 说明                      |
| :----------------------------- | ------------------------- |
| conversionData | AppsFlyerConversionListener回调中onConversionDataSuccess 返回的数据
| UserDlLayerDataListener | 结果回调                  |

调用示例：

```java
    @Override
    protected void onCreate(Bundle savedInstanceState) {
    //...
    AppsFlyerLib.getInstance().init(AF_DEV_KEY, getAppsFlyerConversionListener(), getApplicationContext());
    AppsFlyerLib.getInstance().startTracking(getApplication());
    }

    private AppsFlyerConversionListener getAppsFlyerConversionListener() {
        return new AppsFlyerConversionListener() {
            @Override
            public void onConversionDataSuccess(Map<String, Object> conversionData) {
                ALYAnalysis.getDLData(conversionData, new UserDlLayerDataListener() {
                    @Override
                    public void onSuccess(String s) {
                        Log.i("LOG_TAG", "onSuccess: " + s); 
                    }
                    @Override
                    public void onFail(String s) {
                        Log.i("LOG_TAG", "onFail: " + s);
                    }
                });
            }
            @Override
            public void onConversionDataFail(String errorMessage) {
            }
            @Override
            public void onAppOpenAttribution(Map<String, String> conversionData) {
            }
            @Override
            public void onAttributionFailure(String errorMessage) {
            }
    };
```
# <span id="jump6">6. 获得ABTest数据</span>

### <span >6.1 调用API </span>

> 请在初始化成功之后调用

```java
public static void getUserABTestData(UserAbTestDataListener listener);

```

参数说明

| 参数名                         | 说明                      |
| :----------------------------- | ------------------------- |
| UserAbTestDataListener | 结果回调                  |

调用示例：

```java
    public void getAbTest(View view) {
        ALYAnalysis.getUserABTestData(new UserAbTestDataListener() {
            @Override
            public void onSuccess(String s) {
                Log.i(TAG, "ab test onSuccess: "+s);
//eg.{"pid":"600001","openid":"0eaa0f57cb7cd9b22989102813f5a98d","ab":"A_a:B_c:C_a|D_a","ab_info":{"A_a":"","B_c":"","C_a":"","D_a":""}}
            }

            @Override
            public void onFail(String s) {
                Log.i(TAG, "ab test onFail: "+s);
            }
        });
    }
	
```
