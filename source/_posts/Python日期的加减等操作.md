---
title: Python日期的加减等操作
tags:
  - python
categories:
  - Python
translate_title: python-date-addition-and-subtraction-other-operations
date: 2020-01-13 01:46:06
---
# 1. 日期输出格式化
所有日期、时间的api都在datetime模块内。

<!-- more -->

## 1. datetime => string

```python
now = datetime.datetime.now()
now.strftime('%Y-%m-%d %H:%M:%S')
#输出2012-03-05 16:26:23.870105
```

strftime是datetime类的实例方法。

## 2. string => datetime

```python
t_str = '2012-03-05 16:26:23'
d = datetime.datetime.strptime(t_str, '%Y-%m-%d %H:%M:%S')
```

strptime是datetime类的静态方法。

# 2. 日期比较操作
在`datetime`模块中有`timedelta`类，这个类的对象用于表示一个时间间隔，比如两个日期或者时间的差别。

构造方法：

```python
datetime.timedelta(days=0, seconds=0, microseconds=0, milliseconds=0, minutes=0, hours=0, weeks=0)
```
所有的参数都有默认值`0`，这些参数可以是`int`或`float`，正的或负的。

可以通过`timedelta.days`、`tiemdelta.seconds`等获取相应的时间值。

`timedelta`类的实例，支持加、减、乘、除等操作，所得的结果也是`timedelta`类的实例。比如：

```python
year = timedelta(days=365)
ten_years = year *10
nine_years = ten_years - year
```

同时，`date`、`time`和`datetime`类也支持与`timedelta`的加、减运算。

```python
datetime1 = datetime2 +/- timedelta
timedelta = datetime1 - datetime2
```

这样，可以很方便的实现一些功能。

## 1. 两个日期相差多少天。

```python
d1 = datetime.datetime.strptime('2012-03-05 17:41:20', '%Y-%m-%d %H:%M:%S')
d2 = datetime.datetime.strptime('2012-03-02 17:41:20', '%Y-%m-%d %H:%M:%S')
delta = d1 - d2
print delta.days
# 输出：3
```

## 2. 今天的n天后的日期。

```python
now = datetime.datetime.now()
delta = datetime.timedelta(days=3)
n_days = now + delta
print n_days.strftime('%Y-%m-%d %H:%M:%S')
#输出：2012-03-08 17:44:50
```

```python
 #coding=utf-8
import datetime
now=datetime.datetime.now()
print now
#将日期转化为字符串 datetime => string
print now.strftime('%Y-%m-%d %H:%M:%S')

t_str = '2012-03-05 16:26:23'
#将字符串转换为日期 string => datetime
d=datetime.datetime.strptime(t_str,'%Y-%m-%d %H:%M:%S')
print d

#在datetime模块中有timedelta类，这个类的对象用于表示一个时间间隔，比如两个日#期或者时间的差别。

 #计算两个日期的间隔
d1 = datetime.datetime.strptime('2012-03-05 17:41:20', '%Y-%m-%d %H:%M:%S')
d2 = datetime.datetime.strptime('2012-03-02 17:41:20', '%Y-%m-%d %H:%M:%S')
delta = d1 - d2
print delta.days
print delta

#今天的n天后的日期。
now=datetime.datetime.now()
delta=datetime.timedelta(days=3)
n_days=now+delta
print n_days.strftime('%Y-%m-%d %H:%M:%S')
```