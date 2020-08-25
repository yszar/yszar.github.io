---
title: Python的url解析库--urlparse
tags:
  - python
  - urlparse
categories:
  - python
translate_title: pythons-url-parsing-libraryurlparse
date: 2020-01-13 01:40:42
---
# 一、urlparse解析url的query并构建字典
下面的方法主要的功能：

解析url的各个部分，并能够获取url的query部分，并把query部分构建成dict。

<!-- more -->

具体的代码实现：

```python
>>> import urlparse
>>> url = "http://www.example.org/default.html?ct=32&op=92&item=98"
>>> urlparse.urlsplit(url)
SplitResult(scheme='http', netloc='www.example.org', path='/default.html', query='ct=32&op=92&item=98', fragment='')
>>> urlparse.parse_qs(urlparse.urlsplit(url).query)
{'item': ['98'], 'op': ['92'], 'ct': ['32']}
>>> dict(urlparse.parse_qsl(urlparse.urlsplit(url).query))
{'item': '98', 'op': '92', 'ct': '32'}
>>>
```

**注意**：

> 1. 在Python3中， `urlparse`已经被移动到`urllib.parse`中。
> 2. 在`urlparse`中有两个函数：`urlparse.parse_qs()`和`urlparse.parse_qsl()`。这两个函数都能解析url中的`query`字段。如果url的`query`中有同一个key对应多个value，其中`urlparse.parse_qs()`可以把该相同key的value放在一个list中。
> 3. 有时间测试一下，如果url的`query`中有同一个key对应多个value，那么服务端要怎样接收。


```python
import urlparse    
url=urlparse.urlparse('http://www.baidu.com/index.php?username=guol')
>>> print url
    ParseResult(scheme='http', netloc='www.baidu.com', path='/index.php', params='', query='username=guol', fragment='')
>>> print url.netloc
    www.baidu.com
```

# 二、url解码
有时url会进行编码，例如搜索的中文关键词会进行简单的编码，具体的解码方法：


```python
>>> import urlparse
>>> from urlparse import unquote
>>> url = "http://www.google.com/support/contact/bin/request.py?entity=%7B%22author%22:%22AIe9_BEW4fia2hKVVTrlUwNzhLS-jMdh3isj0rMd7_Cw85R1-YlRNFkUwoDyhH4aMj7AdHsW5A1po8BinbxspAuLBdB-or_3YzCMNXZKYrb50MIIJCZEpb4%22,%22groups%22:%5B%22general%22,%2254296%7C700726330%22%5D,%22trustedMerchantId%22:%22MID_54316%22%7D&amp;client=242&amp;contact_type=anno&amp;hl=en_US"
>>> a = urlparse.urlparse(url).query
>>> b = unquote(a)
>>> b
'entity={"author":"AIe9_BEW4fia2hKVVTrlUwNzhLS-jMdh3isj0rMd7_Cw85R1-YlRNFkUwoDyhH4aMj7AdHsW5A1po8BinbxspAuLBdB-or_3YzCMNXZKYrb50MIIJCZEpb4","groups":["general","54296|700726330"],"trustedMerchantId":"MID_54316"}&amp;client=242&amp;contact_type=anno&amp;hl=en_US'
>>> import HTMLParser
>>> html_parser = HTMLParser.HTMLParser()
>>> txt = html_parser.unescape(b)
>>> txt
u'entity={"author":"AIe9_BEW4fia2hKVVTrlUwNzhLS-jMdh3isj0rMd7_Cw85R1-YlRNFkUwoDyhH4aMj7AdHsW5A1po8BinbxspAuLBdB-or_3YzCMNXZKYrb50MIIJCZEpb4","groups":["general","54296|700726330"],"trustedMerchantId":"MID_54316"}&client=242&contact_type=anno&hl=en_US'
>>> c = urlparse.parse_qsl(txt, True)
>>> c   # c是一个list
[(u'entity', u'{"author":"AIe9_BEW4fia2hKVVTrlUwNzhLS-jMdh3isj0rMd7_Cw85R1-YlRNFkUwoDyhH4aMj7AdHsW5A1po8BinbxspAuLBdB-or_3YzCMNXZKYrb50MIIJCZEpb4","groups":["general","54296|700726330"],"trustedMerchantId":"MID_54316"}'), (u'client', u'242'), (u'contact_type', u'anno'), (u'hl', u'en_US')]
>>> import json
>>> c = dict(c)
>>> d = json.loads(c['entity'])
>>> d
{u'trustedMerchantId': u'MID_54316', u'groups': [u'general', u'54296|700726330'], u'author': u'AIe9_BEW4fia2hKVVTrlUwNzhLS-jMdh3isj0rMd7_Cw85R1-YlRNFkUwoDyhH4aMj7AdHsW5A1po8BinbxspAuLBdB-or_3YzCMNXZKYrb50MIIJCZEpb4'}
>>> print d['groups'][-1]
54296|700726330
>>>
```

**注意**：

> 1. 使用`urlparse.unquote`把编码的url解码。
> 2. 使用HTMLParser对url的特殊符号进行解码。
> 3. 把元组组成的list转换成dict，每个元组的第一个元素为dict的key，第二个元素为dict的value。