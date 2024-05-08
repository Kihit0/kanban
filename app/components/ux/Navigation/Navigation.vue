<template>
  <div class="navigation w-full px-12 py-16">
    <div class="navigation-wrapper">
      <div class="navigation-user"></div>
      <div class="navigation-main__menu">
        <div class="navigation-main__menu-title">
          <div class="flex content-center justify-between cursor-pointer" @click="() => showMenu = !showMenu">
            <p>Main menu</p>
            <div class="navigation-icon__expand-more flex content-center justify-center">
              <svg class="icon-expend" :class="{ 'hidden': !showMenu }">
                <use xlink:href="#expand" />
              </svg>
            </div>
          </div>
          <div class="navigation-main__menu-items">
            <ExpandTransition>
              <ul class="navigation-ul" v-show="showMenu">
                <li class="navigation-ul__li" v-for="(item, index) in getNavigateMainItems()" :key="index">
                  <RouterLink class="navigation-ul__li-link flex content-center p-4 rounded-4" :to="{ path: item.path }"
                    :class="{ 'active': item.path === getActivePath() }">
                    <div class="navigation-main__menu-items__item-icon mx-4 flex content-center justify-center">
                      <svg class="menu-icon">
                        <use :xlink:href="`#${String(item.name).toLowerCase()}`" />
                      </svg>
                    </div>
                    <div class="navigation-main__menu-items__item-text">
                      {{ item.name }}
                    </div>
                  </RouterLink>
                </li>
              </ul>
            </ExpandTransition>
          </div>
        </div>
      </div>
      <div class="navigation-pages__user">
        <div class="flex content-center justify-between cursor-pointer" @click="() => showPages = !showPages">
          <p>My pages</p>
          <div class="navigation-icon__expand-more flex content-center justify-center">
            <svg class="icon-expend" :class="{ 'hidden': !showPages }">
              <use xlink:href="#expand" />
            </svg>
          </div>
        </div>
        <div class="navigation-pages__user-items">
          <ExpandTransition>
            <ul class="navigation-ul" v-show="showPages">
              <li class="navigation-ul__li">
                <RouterLink class="navigation-ul__li-link flex content-center p-4 rounded-4"
                  to="a"
                  :class="{ 'active': false }">

                </RouterLink>
              </li>

              <li class="navigation-ul__li navigation-ul__li-create-pages">

              </li>
            </ul>
          </ExpandTransition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import ExpandTransition from "../../ui/Transition/ExpandTransition.vue"

export default {
  components: {
    ExpandTransition,
  },
  data() {
    return {
      showMenu: true,
      showPages: true
    }
  },
  methods: {
    getActivePath() {
      return this.$route.path;
    },
    getNavigateMainItems() {
      const mainPath = this.$router.options.routes.filter(el => el.name === 'Main')[0];
      return mainPath.children ?? [];
    }
  }
}
</script>

<style scoped>
@import url("./style.css");
</style>