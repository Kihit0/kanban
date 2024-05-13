<template>
  <div class="sidebar w-full px-12 py-16">
    <div class="sidebar-wrapper">
      <div class="sidebar-user"></div>
      <div class="sidebar-menu">
        <div class="sidebar-menu__items" v-for="(item, index) in getNavigateItems()" :key="item.title + index">
          <div class="flex content-center justify-between cursor-pointer" @click="item.open">
            <p>{{ item.title }}</p>
            <div class="sidebar-icon__expand-more flex content-center justify-center">
              <svg class="icon-expend" :class="{ 'hidden': !item.show }">
                <use xlink:href="#expand" />
              </svg>
            </div>
          </div>
          <div class="sidebar-items">
            <ExpandTransition>
              <ul class="sidebar-ul" v-show="item.show">
                <li class="sidebar-ul__li" v-for="(el, idx) in item.items" :key="idx">
                  <RouterLink v-if="el.path !== null" class="sidebar-ul__li-link flex content-center p-4 rounded-4"
                    :to="{ path: el.path }" :class="{ 'active': item.path === getActivePath() }">
                    <div class="sidebar-items__item-icon mx-4 flex content-center justify-center">
                      <svg class="menu-icon">
                        <use :xlink:href="`#${String(el.name).toLowerCase()}`" />
                      </svg>
                    </div>
                    <div class="sidebar-items__item-text">
                      {{ el.name }}
                    </div>
                  </RouterLink>
                  <div v-else class="flex cursor-pointer p-4" @click="showModal = true">
                    <div class="sidebar-create__icon mx-4">
                      <svg class="menu-icon">
                        <use :xlink:href="`#${String(el.icon).toLowerCase()}`" />
                      </svg>
                    </div>
                    <div class="sidebar-items__item-text">
                      Create New
                    </div>
                  </div>
                </li>
              </ul>
            </ExpandTransition>
          </div>
        </div>
      </div>
    </div>
    <div class="sidebar-modal">
      <CreatePages :is-open="showModal" :close-modal="() => closeModal()" />
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import ExpandTransition from "../../ui/Transition/ExpandTransition.vue"
import CreatePages from "../../elements/Modal/CreatePages.vue";

export default {
  components: {
    ExpandTransition,
    CreatePages
  },
  data() {
    return {
      showMenu: true,
      showPages: true,
      showModal: false,
    }
  },
  methods: {
    getUserToken() {
      const token = localStorage.getItem("u_token");
      return token;
    },
    getActivePath() {
      return this.$route.path;
    },
    getNavigateItems() {
      const mainMenuTitle = ["settings", "calendar", "notification", "search"]
      const mainPath = this.$router.options.routes.filter(el => el.name === 'Main')[0];

      const mainMenu = mainPath.children && mainPath.children.filter(item =>
        ~mainMenuTitle.indexOf(String(item.name).toLocaleLowerCase())
      )

      const userPages = [{
        path: "/user/1/pages/1",
        name: "Default"
      }]

      const result = [
        {
          title: "Main menu",
          items: mainMenu,
          open: () => this.isOpenMenu(),
          show: this.showMenu
        },
        {
          title: "My Pages",
          items: userPages.concat({ path: null, name: "Create new", icon: "add" }),
          open: () => this.isOpenPages(),
          show: this.showPages
        }
      ]

      return result;
    },
    isOpenMenu() {
      this.showMenu = !this.showMenu
    },
    isOpenPages() {
      this.showPages = !this.showPages;
    },
    closeModal() {
      this.showModal = false;
    }
  },
}
</script>

<style scoped>
@import url("./style.css");
</style>