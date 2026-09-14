(function(){
  const {createApp}=Vue;
  const App={template:`<div id="app" class="framework-ready">
    <aside class="sidebar"><div class="brand"><b>π Math Exam</b><small>Booster</small></div>
      <nav><button v-for="item in nav" :key="item[0]" :data-page="item[0]" @click="go(item[0])">{{item[1]}}</button></nav>
    </aside>
    <main><header><strong>Math Exam Booster</strong><span class="framework-badge">Vue 3 CDN</span><div class="search"><input id="search" placeholder="ค้นหา บทเรียน สูตร โจทย์ เทคนิค...">⌕</div><span id="streak">🔥 0 วัน</span></header><section id="content"></section></main>
    <div class="bottom"><button v-for="item in bottom" :key="item[0]" :data-page="item[0]" @click="go(item[0])">{{item[1]}}<small>{{item[2]}}</small></button></div><div id="toast"></div>
  </div>`,
  data(){return{nav:[['home','🏠 Home'],['learn','📚 Learn'],['practice','✏️ Practice'],['matrix','📐 Matrix'],['ai','🤖 AI เจนโจทย์'],['worked','✏️ โจทย์ + วิธีทำ'],['tools','🧮 เครื่องคิดเลข'],['progress','📊 Progress'],['settings','⚙️ Settings']],bottom:[['home','🏠','Home'],['practice','✏️','โจทย์'],['matrix','📐','Matrix'],['tools','🧮','คำนวณ'],['progress','📊','ผล']]}},
  mounted(){if(window.render){window.render();} else {setTimeout(()=>window.render&&window.render(),50)}},
  methods:{go(p){if(window.go)window.go(p)}}};
  createApp(App).mount('#vue-root');
})();
