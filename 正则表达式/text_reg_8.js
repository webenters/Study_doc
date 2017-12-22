
hello world .


你好，世界。









<div style="border:1px solid #000">test</div>

<script>alert('hello world!');</script>

<img src='img/logo.png' />






















[\u4e00-\u9fa5]+
匹配中文字符


[^\x00-\xff]+
匹配双字节字符（包括汉字）

<(.+)>.*?<\/.+>|<.*? \/>
匹配标签


 [\u2E80-\u2EFF\u2F00-\u2FDF\u3000-\u303F\u31C0-\u31EF\u3200-\u32FF\u3300-\u33FF\u3400-\u4DBF\u4DC0-\u4DFF\u4E00-\u9FBF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF]+
 完整匹配中文字符