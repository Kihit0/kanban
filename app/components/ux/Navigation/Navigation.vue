<template>
  <div class="navigation w-full px-12 py-8">
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
              <ul class="navigation-main__menu-items__item" v-show="showMenu">
                <li class="navigation-main__menu-items__item-li" v-for="(item, index) in getNavigateItems()"
                  :key="index">
                  <RouterLink class="flex" :to="{path: item.path}">
                    <div class="navigation-main__menu-items__item-icon mx-4">
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

      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import ExpandTransition from "../../ui/Transition/ExpandTransition.vue"

export default {
  components: {
    ExpandTransition
  },
  data() {
    return {
      showMenu: true,
      showPages: true
    }
  },
  methods: {
    getNavigateItems() {
      const mainPath = this.$router.options.routes.filter(el => el.name === 'Main')[0];
      return mainPath.children ?? [];
    }
  }
}
</script>

<style scoped>
.navigation {
  height: 100%;

  font-size: 0.75rem;
  color: var(--text-color-menu);

  border: 1px solid red;
}

.navigation-main__menu-title>div>p {
  text-transform: uppercase;
  font-size: 14px;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  letter-spacing: -0.5px;
}

.navigation-icon__expand-more>.icon-expend {
  width: 25px;
  height: 25px;
  fill: var(--text-color-menu);
  transition: rotate .2s ease;
}

.navigation-icon__expand-more>.icon-expend.hidden {
  rotate: -90deg;
}

.navigation-main__menu-items__item{
  margin-top: 8px;
  margin-left: 8px;
  list-style: none;
}

.navigation-main__menu-items__item-li{
  margin-bottom: 4px;

  font-weight: 500;
  font-size: 14px;
}

.navigation-main__menu-items__item-text{
  margin-left: 6px;
}

.navigation-main__menu-items__item-icon .menu-icon {
  width: 20px;
  height: 20px;
  fill: currentColor;
}
</style>