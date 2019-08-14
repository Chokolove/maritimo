<template>
  <div>
    <SectionHeader/>
    <MainBody/>
    <SectionFooter/>
  </div>
</template>
<script>
import axios from 'axios'
import SectionHeader from '~/components/SectionHeader'
import SectionFooter from '~/components/SectionFooter'
import MainBody from '~/components/MainBody'
export default {
  components: {
    SectionHeader,
    MainBody,
    SectionFooter
  },
  data () {
    return {
      Contact: {
        name: '',
        cell: '',
        email: '',
        comment: ''
      }
    }
  },
  methods: {
    insert ({ $axios }) {
      axios.post('http://localhost:4000/insert', this.Contact)
        .then((Response) => {})
        .catch((err) => {
          this.errors.push(err)
        })
    }
  }
}
</script>
