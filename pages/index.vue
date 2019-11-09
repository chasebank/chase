<template>
  <main class="container">
    <div class="content">
      

      <h1 class="header--home"><span>CHASE</span><span>WHITESIDE</span><span>Designer</span><span>Developer</span></h1>

      <h2 class="header--portfolio"><span><nuxt-link to="/portfolio" class="page-link">Portfolio</nuxt-link></span><span>Projects</span></h2>

      <PortfolioList :projects="projects"/>

      <!-- <h2><span><nuxt-link to="/about" class="page-link">About</nuxt-link></span><span><nuxt-link to="/about" class="page-link">Me</nuxt-link></span></h2> -->

      <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi error nesciunt illum repudiandae, dolorum ex quam cum voluptates enim beatae maxime nisi quia, quo cupiditate iste adipisci dolores ullam magni.</p> -->
      
      <!-- <h2><span><nuxt-link to="/notes/codes" class="page-link">Code</nuxt-link></span><span><nuxt-link to="/notes/codes" class="page-link">Snippets</nuxt-link></span></h2> -->

      <!-- <CodesList :posts="codeLanguages"/> -->
      <!-- <CodesList :codes=""/> -->

      <!-- <h2><span>Notes</span><span>& Quotes</span></h2>

      <NotesAndQuotesList/> -->
    </div>
  </main>
</template>

<script>
import pageMixin from '~/mixins/page-mixin.vue'

import LongContent from '~/components/LongContent.vue'
import PortfolioList from '~/components/PortfolioList.vue'
import CodesList from '~/components/CodesList.vue'
// import NotesAndQuotesList from '~/components/NotesAndQuotesList.vue'

import projects from '~/pages/portfolio/list.js'
import codeLanguages from '~/pages/notes/codes/list.js'

export default {
  async asyncData ({app}) {
    async function asyncImportProjects(slug) {
      const wholeMD = await import(`~/pages/portfolio/${slug}.md`)

      return {
        ...wholeMD.attributes,
        slug: slug,
      }
    }

    async function asyncImportCodeLanguages(slug) {
      const wholeMD = await import(`~/pages/notes/codes/${slug}.md`)

      return {
        ...wholeMD.attributes,
        slug: slug,
      }
    }

    return Promise.all([
      Promise.all(projects.map(project => asyncImportProjects(project))),
      Promise.all(codeLanguages.map(post => asyncImportCodeLanguages(post))),
    ]).then(results => {
      const [projectRes,codeLanguageRes] = results

      projectRes.sort(function(a,b){
        return new Date(b.created) - new Date(a.created);
      });

      return {
        projects: projectRes,
        codeLanguages: codeLanguageRes
      };
    });
  },

  mixins: [pageMixin],

  name: 'home',

  components: {
    LongContent,
    PortfolioList,
    // CodesList,
    // NotesAndQuotesList
  },

  mounted() {
    
  }
}
</script>

<style lang="scss">
pre {
  color: white;
}
</style>
