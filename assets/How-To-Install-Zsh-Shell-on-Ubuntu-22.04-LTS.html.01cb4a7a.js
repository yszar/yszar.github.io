import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as o,a,b as s,d as e,e as i,r}from"./app.09cdccfa.js";const c="/assets/How-To-Install-Zsh-Shell-on-Ubuntu-22.04-LTS-1666021730149.1c916955.png",p="/assets/How-To-Install-Zsh-Shell-on-Ubuntu-22.04-LTS-1666021833083.55427044.png",d="/assets/How-To-Install-Zsh-Shell-on-Ubuntu-22.04-LTS-1666021863465.a17fe64f.png",h="/assets/How-To-Install-Zsh-Shell-on-Ubuntu-22.04-LTS-1666023947383.b8d49414.png",u="/assets/How-To-Install-Zsh-Shell-on-Ubuntu-22.04-LTS-1666024061172.57148515.png",g={},v=i(`<blockquote><p>Zsh \u662F\u4E00\u4E2A UNIX \u547D\u4EE4\u89E3\u91CA\u5668 (shell)\uFF0C\u53EF\u7528\u4F5C\u4EA4\u4E92\u5F0F\u767B\u5F55 shell \u548C\u57FA\u672C\u811A\u672C\u6267\u884C\u3002 \u5B83\u662F MacOS \u7684\u9ED8\u8BA4 Shell\uFF0C\u4E5F\u53EF\u5728 Linux/Windows \u4E0A\u4F7F\u7528\uFF01 \u5C31\u50CF\u5B83\u7684\u90BB\u5C45 Bash \u4E00\u6837\u2014\u2014\u4E5F\u6765\u81EA UIDA Software\u3002 Zsh \u53EF\u7528\u4E8E\u81EA\u52A8\u6267\u884C\u5177\u6709\u811A\u672C\u529F\u80FD\u7684\u4EFB\u52A1\uFF0C\u5141\u8BB8\u60A8\u4EC5\u901A\u8FC7\u4F7F\u7528\u5B83\u63D0\u4F9B\u7684\u8FD9\u4E9B\u5F3A\u5927\u529F\u80FD\u6765\u7F16\u5199\u811A\u672C\u6216\u7A0B\u5E8F\u3002 \u53E6\u4E00\u4E2A\u5F88\u68D2\u7684\u529F\u80FD\u662F\u60A8\u4E0D\u5FC5\u952E\u5165\u6BCF\u4E2A <strong>\u201C\uFF03\u201D</strong> \u6BCF\u4E2A\u7A0B\u5E8F\u7684\u8BED\u6CD5\u4E00\u6B21\u4E00\u884C\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u90FD\u5B58\u50A8\u5728\u79F0\u4E3A\u6807\u7B7E\u7684\u53D8\u91CF\u4E2D\uFF0C\u8FD9\u4F7F\u5F97\u7BA1\u7406\u5927\u91CF\u6570\u636E\u53D8\u5F97\u5BB9\u6613\u3002</p></blockquote><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5728\u4EE5\u4E0B\u6559\u7A0B\u4E2D\uFF0C\u60A8\u5C06\u5B66\u4E60\u5982\u4F55\u4F7F\u7528\u547D\u4EE4\u884C\u7EC8\u7AEF\u5728 Ubuntu 22.04 LTS Jammy Jellyfish \u4E0A\u5B89\u88C5 Zsh \u547D\u4EE4\u89E3\u91CA\u5668 shell\uFF0C\u4EE5\u53CA\u5982\u4F55\u542F\u52A8\u9996\u6B21\u8BBE\u7F6E\u4EE5\u914D\u7F6E\u60A8\u7684 zsh \u547D\u4EE4\u884C\u89E3\u91CA\u5668\u3002</p></div><hr><h2 id="\u66F4\u65B0ubuntu" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0ubuntu" aria-hidden="true">#</a> \u66F4\u65B0Ubuntu</h2><p>\u9996\u5148\uFF0C\u786E\u4FDD\u60A8\u7684\u7CFB\u7EDF\u662F\u6700\u65B0\u7684\uFF0C\u4EE5\u907F\u514D\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u53D1\u751F\u51B2\u7A81\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">apt</span> upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h2 id="\u5B89\u88C5-zsh" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-zsh" aria-hidden="true">#</a> \u5B89\u88C5 Zsh</h2><p>\u7B2C\u4E00\u79CD\u4E5F\u662F\u6700\u7B80\u5355\u7684\u65B9\u6CD5\u662F\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u76F4\u63A5\u4ECE Ubuntu 22.04 \u9ED8\u8BA4\u5B58\u50A8\u5E93\u5B89\u88C5 Zsh\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">zsh</span> <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u786E\u8BA4\u7248\u672C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">zsh</span> <span class="token parameter variable">--version</span>   <span class="token comment"># zsh 5.8.1 (x86_64-ubuntu-linux-gnu)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6307\u5B9AZsh\u4E3A\u9ED8\u8BA4shell</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>chsh <span class="token parameter variable">-s</span> /bin/zsh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0B\u8F7Doh-my-zsh</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\u5E76\u4F7F\u5176\u751F\u6548</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cp</span> ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc
// \u5C06 ~/.zshrc \u4E2D\u7684 <span class="token assign-left variable">plugins</span><span class="token operator">=</span><span class="token punctuation">(</span>git<span class="token punctuation">)</span> \u6539\u4E3A <span class="token assign-left variable">plugins</span><span class="token operator">=</span><span class="token punctuation">(</span>git zsh-autosuggestions<span class="token punctuation">)</span>
<span class="token builtin class-name">source</span> ~/.zshrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u66F4\u65B0oh-my-zsh</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>omz update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+c+'" alt="" loading="lazy"></p><hr><h2 id="powerlevel10k-\u5B89\u88C5-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#powerlevel10k-\u5B89\u88C5-\u914D\u7F6E" aria-hidden="true">#</a> Powerlevel10k \u5B89\u88C5 &amp; \u914D\u7F6E</h2><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u8FD9\u90E8\u5206\u4ECB\u7ECD\u4E3B\u9898<code>Powerlevel10k</code>\u7684\u5B89\u88C5\u4E0E\u914D\u7F6E</p></div><h3 id="powerlevel10k-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#powerlevel10k-\u5B89\u88C5" aria-hidden="true">#</a> Powerlevel10k \u5B89\u88C5</h3><p>GitHub\u5B89\u88C5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone <span class="token parameter variable">--depth</span><span class="token operator">=</span><span class="token number">1</span> https://github.com/romkatv/powerlevel10k.git <span class="token variable">${ZSH_CUSTOM<span class="token operator">:-</span>$HOME<span class="token operator">/</span>.oh-my-zsh<span class="token operator">/</span>custom}</span>/themes/powerlevel10k\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',27),m={href:"https://gitee.com/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://gitee.com/romkatv/powerlevel10k",target:"_blank",rel:"noopener noreferrer"},k=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone <span class="token parameter variable">--depth</span><span class="token operator">=</span><span class="token number">1</span> https://gitee.com/romkatv/powerlevel10k.git <span class="token variable">\${ZSH_CUSTOM<span class="token operator">:-</span>$HOME<span class="token operator">/</span>.oh-my-zsh<span class="token operator">/</span>custom}</span>/themes/powerlevel10k
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h3 id="powerlevel10k-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#powerlevel10k-\u914D\u7F6E" aria-hidden="true">#</a> Powerlevel10k \u914D\u7F6E</h3><p>\u7F16\u8F91 .zshrc \u6587\u4EF6\uFF0C \u6587\u4EF6\u8DEF\u5F84 ~/.zshrc</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> ~/.zshrc  
<span class="token comment"># \u627E\u5230\u8FD9\u4E00\u884C\uFF0C\u6539\u6210\u8FD9\u6837 ZSH_THEME=&quot;powerlevel10k/powerlevel10k&quot;</span>
<span class="token builtin class-name">source</span> ~/.zshrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E4B\u540E\u5E94\u8BE5\u4F1A\u81EA\u52A8\u542F\u52A8\u914D\u7F6E\u811A\u672C\uFF0C\u5982\u679C\u6CA1\u6709\u542F\u52A8\uFF0C\u8BF7\u8FD0\u884C\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>p10k configure
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7136\u540E\u4F1A\u51FA\u73B0\u5982\u4E0B\u754C\u9762\uFF0C\u9700\u8981\u56DE\u7B54\u51E0\u4E2A\u95EE\u9898</p><div class="custom-container info"><p class="custom-container-title">\u8FD9\u4E00\u6B65\u95EE\u4F60\u770B\u5230\u7684\u662F\u4E0D\u662F\u83F1\u5F62\u5757\uFF0C\u6211\u4EEC\u9009yes\uFF0C\u8F93\u5165y\uFF0C\u56DE\u8F66</p><p><img src="`+p+'" alt="" loading="lazy"></p></div><div class="custom-container info"><p class="custom-container-title">\u95EE\u4F60\u770B\u5230\u7684\u662F\u4E0D\u662F\u4E00\u628A\u9501\u7684\u56FE\u5F62\uFF0C\u540C\u6837\u8F93\u5165y</p><p><img src="'+d+'" alt="" loading="lazy"></p></div><div class="custom-container info"><p class="custom-container-title">\u95EE\u4F60\u770B\u5230\u7684\u662F\u4E0D\u662FDebian\u7684logo\uFF0C\u4EE5\u4E0A\u56FE\u6807\u5982\u6709\u4E0D\u592A\u786E\u5B9A\u7684\uFF0C\u53EF\u4EE5\u6253\u5F00\u63D0\u793A\u4E2D\u7684\u8FDE\u63A5\u8FDB\u884C\u5BF9\u6BD4\u3002</p><p><img src="'+h+'" alt="" loading="lazy"></p></div><div class="custom-container info"><p class="custom-container-title">\u8FD9\u4E00\u6B65\u95EE\u4F60\u770B\u5230\u7684\u56FE\u6807\u662F\u5426\u90FD\u5728X\u4E2D\u95F4</p><p><strong>Y\u9009\u9879</strong> \u5927\u81F4\u610F\u601D\u662F\u56FE\u6807\u975E\u5E38\u9760\u8FD1X\uFF0C\u4F46\u6CA1\u6709\u91CD\u53E0\u3002<br><strong>N\u9009\u9879</strong> \u662F\u56FE\u6807\u4E0EX\u91CD\u53E0\u3002<br> \u6839\u636E\u4F60\u81EA\u5DF1\u7684\u60C5\u51B5\u9009\u62E9\u3002 <img src="'+u+'" alt="" loading="lazy"></p></div><p>\u4E4B\u540E\u7684\u4E00\u4E9B\u9009\u9879\u90FD\u662F\u4E3B\u9898\u6837\u5F0F\u53CA\u5176\u4ED6\u4E00\u4E9B\u4E2A\u6027\u5316\u8BBE\u7F6E\uFF0C\u6839\u636E\u81EA\u5DF1\u559C\u597D\u9009\u62E9\u5373\u53EF\u3002</p><h2 id="\u5B89\u88C5\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u63D2\u4EF6" aria-hidden="true">#</a> \u5B89\u88C5\u63D2\u4EF6</h2>',14),f={href:"https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins",target:"_blank",rel:"noopener noreferrer"},z=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">plugins</span><span class="token operator">=</span><span class="token punctuation">(</span>
  <span class="token function">git</span>
  github
  autojump
  zsh-syntax-highlighting
  zsh-autosuggestions
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> git</h3><p>\u63D0\u4F9B\u4E30\u5BCC\u7684 git \u522B\u540D\u4E0E\u51E0\u4E2A\u6709\u7528\u7684\u51FD\u6570\u3002</p><h3 id="github" tabindex="-1"><a class="header-anchor" href="#github" aria-hidden="true">#</a> github</h3><p>\u63D0\u4F9B\u51E0\u4E2A\u5FEB\u6377\u7684\u51FD\u6570\u3002</p><h3 id="autojump" tabindex="-1"><a class="header-anchor" href="#autojump" aria-hidden="true">#</a> autojump</h3>`,6),_={href:"https://github.com/wting/autojump#installation",target:"_blank",rel:"noopener noreferrer"},x=i(`<h3 id="zsh-syntax-highlighting" tabindex="-1"><a class="header-anchor" href="#zsh-syntax-highlighting" aria-hidden="true">#</a> zsh-syntax-highlighting</h3><p>\u7EC8\u7AEF\u547D\u4EE4\u8BED\u6CD5\u9AD8\u4EAE\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/zsh-users/zsh-syntax-highlighting.git <span class="token variable">\${ZSH_CUSTOM<span class="token operator">:-</span>~<span class="token operator">/</span>.oh-my-zsh<span class="token operator">/</span>custom}</span>/plugins/zsh-syntax-highlighting

<span class="token assign-left variable">plugins</span><span class="token operator">=</span><span class="token punctuation">(</span>zsh-syntax-highlighting<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="zsh-autosuggestions" tabindex="-1"><a class="header-anchor" href="#zsh-autosuggestions" aria-hidden="true">#</a> zsh-autosuggestions</h3><p>\u7EC8\u7AEF\u547D\u4EE4\u81EA\u52A8\u63A8\u8350\uFF0C\u4F1A\u8BB0\u5F55\u4E0B\u6765\u4E4B\u524D\u4F7F\u7528\u8FC7\u7684\u547D\u4EE4\uFF0C\u5F53\u4F60\u8F93\u5165\u5F00\u5934\u65F6\uFF0C\u4F1A\u6697\u8272\u63D0\u793A\u4E4B\u524D\u7684\u5386\u53F2\u547D\u4EE4\u4F9B\u4F60\u9009\u62E9\uFF0C\u53EF\u76F4\u63A5\u6309\u53F3\u65B9\u5411\u952E\u9009\u4E2D\u8BE5\u547D\u4EE4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/zsh-users/zsh-autosuggestions <span class="token variable">\${ZSH_CUSTOM<span class="token operator">:-</span>~<span class="token operator">/</span>.oh-my-zsh<span class="token operator">/</span>custom}</span>/plugins/zsh-autosuggestions

<span class="token assign-left variable">plugins</span><span class="token operator">=</span><span class="token punctuation">(</span>zsh-autosuggestions<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),y={href:"https://github.com/robbyrussell/oh-my-zsh/tree/master/plugins",target:"_blank",rel:"noopener noreferrer"},S=i(`<h2 id="zsh\u914D\u7F6E\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#zsh\u914D\u7F6E\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> zsh\u914D\u7F6E\u73AF\u5883\u53D8\u91CF</h2><p>\u8FD9\u91CC\u62FF\u4E4B\u524D\u88C5\u597D\u7684anaconda3\u4E3E\u4F8B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> ~/.zshrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728\u5176\u4E2D\u52A0\u5165anaconda3\u7684\u73AF\u5883\u53D8\u91CF\uFF0C\u8DEF\u5F84\u6362\u6210\u81EA\u5DF1\u7684\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/home/liu/anaconda3/bin:<span class="token environment constant">$PATH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5);function w(T,Z){const n=r("ExternalLinkIcon");return l(),o("div",null,[v,a("p",null,[s("\u56FD\u5185\u7528\u6237\u53EF\u4EE5\u4F7F\u7528 "),a("a",m,[s("gitee"),e(n)]),s(" \u4E0A\u7684"),a("a",b,[s("\u5B98\u65B9\u955C\u50CF"),e(n)]),s("\u52A0\u901F\u4E0B\u8F7D")]),k,a("p",null,[s("Oh My Zsh \u6709\u975E\u5E38\u4E30\u5BCC\u7684"),a("a",f,[s("\u63D2\u4EF6"),e(n)]),s("\uFF0C\u4F7F\u7528\u63D2\u4EF6\u53EF\u4EE5\u4F7F\u5F97\u5728\u7EC8\u7AEF\u7684\u6548\u7387\u7FFB\u500D\uFF0C\u4E0B\u9762\u4ECB\u7ECD 5 \u4E2A\u6211\u5E38\u7528\u7684\u63D2\u4EF6\u3002 \u63D2\u4EF6\u5747\u9700\u5728\u914D\u7F6E\u6587\u4EF6 ~/.zshrc \u4E2D\u5199\u51FA\uFF0C\u5982\u4E0B\uFF1A")]),z,a("p",null,[s("\u53EF\u4EE5\u8BB0\u5F55\u4E0B\u6765\u4F60\u4E4B\u524D cd \u5230\u8BBF\u8FC7\u7684\u6240\u6709\u76EE\u5F55\uFF0C\u4E0B\u6B21\u8981\u53BB\u90A3\u4E2A\u76EE\u5F55\u65F6\u4E0D\u9700\u8981\u8F93\u5165\u5B8C\u6574\u7684\u8DEF\u5F84\uFF0C\u76F4\u63A5 j somedir \u5373\u53EF\u5230\u8FBE\uFF0C\u751A\u81F3\u90A3\u4E2A\u76EE\u6807\u76EE\u5F55\u7684\u540D\u79F0\u53EA\u8F93\u5165\u5F00\u5934\u4E5F\u53EF\u4EE5\u3002 "),a("a",_,[s("\u5B89\u88C5\u65B9\u5F0F"),e(n)])]),x,a("p",null,[a("a",y,[s("\u66F4\u591A\u63D2\u4EF6\uFF0C\u8BF7\u81EA\u884C\u70B9\u51FB\u67E5\u770Bgithub\u3002"),e(n)])]),S])}const I=t(g,[["render",w],["__file","How-To-Install-Zsh-Shell-on-Ubuntu-22.04-LTS.html.vue"]]);export{I as default};
