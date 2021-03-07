import React from 'react';
import {Card,Breadcrumb } from 'antd';
import {Link} from 'react-router-dom';

let html1=`
<p>《<strong>汇智网 Node.js 课程</strong>》</p>
<p><a href="http://www.hubwiz.com/course/?type=nodes" target="_blank">http://www.hubwiz.com/course/?type=nodes</a></p>
<p>《<strong>快速搭建 Node.js 开发环境以及加速 npm</strong>》</p>
<p><a href="http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html" target="_blank">http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html</a></p>
<p>《<strong>Node.js 包教不包会</strong>》</p>
<p><a href="https://github.com/alsotang/node-lessons" target="_blank">https://github.com/alsotang/node-lessons</a></p>
<p>《<strong>ECMAScript 6入门</strong>》</p>
<p><a href="http://es6.ruanyifeng.com/" target="_blank">http://es6.ruanyifeng.com/</a></p>
<p>《<strong>七天学会NodeJS</strong>》</p>
<p><a href="https://github.com/nqdeng/7-days-nodejs" target="_blank">https://github.com/nqdeng/7-days-nodejs</a></p>
<p>《<strong>Node入门-<em>一本全面的Node.js教程</em></strong>》</p>
<p><a href="http://www.nodebeginner.org/index-zh-cn.html" target="_blank">http://www.nodebeginner.org/index-zh-cn.html</a></p>`

let html2=`
<p>《<strong>node weekly</strong>》</p>
<p><a href="http://nodeweekly.com/issues" target="_blank">http://nodeweekly.com/issues</a></p>
<p>《<strong>node123-<em>node.js中文资料导航</em></strong>》</p>
<p><a href="https://github.com/youyudehexie/node123" target="_blank">https://github.com/youyudehexie/node123</a></p>
<p>《<strong>A curated list of delightful Node.js packages and resources</strong>》</p>
<p><a href="https://github.com/sindresorhus/awesome-nodejs" target="_blank">https://github.com/sindresorhus/awesome-nodejs</a></p>
<p>《<strong>Node.js Books</strong>》</p>
<p><a href="https://github.com/pana/node-books" target="_blank">https://github.com/pana/node-books</a></p>
`
let html3 = `
<p>《<strong>名人堂</strong>》</p>
<p><a href="https://github.com/cnodejs/nodeclub/wiki/%E5%90%8D%E4%BA%BA%E5%A0%82" target="_blank">https://github.com/cnodejs/nodeclub/wiki/名人堂</a></p>`

let html4=`
<p>新手搭建 Node.js 服务器，推荐使用无需备案的 <a href="https://www.digitalocean.com/?refcode=eba02656eeb3" target="_blank">DigitalOcean(https://www.digitalocean.com/)</a></p>
`

function GetStart() {
  return (
    <div>
    <Card
      title={<Breadcrumb>
        <Breadcrumb.Item>
            <Link to={'/'}>首页</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
        Node.js 入门
        </Breadcrumb.Item>
      </Breadcrumb>}
      type='inner'
    >
      <div dangerouslySetInnerHTML={{
        __html:html1
      }}>

      </div>
    </Card>
    <Card
    title={<h3>Node.js 资源</h3>}
    type='inner'
  >
    <div dangerouslySetInnerHTML={{
      __html:html2
    }}>

    </div>
  </Card>
  <Card
    title={<h3>Node.js 名人</h3>}
    type='inner'
  >
    <div dangerouslySetInnerHTML={{
      __html:html3
    }}>

    </div>
  </Card>
  <Card
    title={<h3>Node.js 服务器</h3>}
    type='inner'
  >
    <div dangerouslySetInnerHTML={{
      __html:html4
    }}>

    </div>
  </Card>
  </div>
  );
}

export default GetStart;
