<template>
  <div id="admin">
    <!-- Боковая панель навгации -->
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      :value="drawer"
      enable-resize-watcher
      fixed
      app
    >
    <v-list dense>
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ $t('main') }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{name: 'employees'}">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ $t('employees') }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!-- Основной контент -->
    <v-content> 
      <transition  enter-active-class="routerEnter" leave-active-class="routerLeave" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-content> 
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      clipped: false,
      fixed: true,
      items: [{
        icon: 'bubble_chart'
      }],
      miniVariant: false
    }
  },
  computed: mapGetters({
    drawer: 'theme/drawer'
  })
}
</script>


<style>

#admin .application--wrap {
  min-height: auto !important;
}

  h2 {
    font-size: 22px;
    font-weight: normal;
    text-align: center;
  }

  .application .application--wrap {
    position: relative;
    min-height: auto;
  }

  .card__title {
    justify-content: center;
  }

  .title__icon {
    font-size: 35px;
    margin: 0 10px;
  }

  .input-group__details .input-group__error {
    display: block;
    flex:none;
  }
  
  .buttons {
    width: 100%;
    height: 70px;
    margin-top: 40px;
    text-align: center;
  }
  .routerEnter {
    animation: routerEnter .6s;
  }

  .routerLeave {
    animation: routerLeave .6s;
  }

  .buttonEnter {
    animation: buttonEnter .3s cubic-bezier(.09,.9,.48,1.64);
  }

  .buttonLeave {
    animation: buttonLeave .3s cubic-bezier(.52,-0.44,.88,-0.45);
  }

  @keyframes routerEnter {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }

  @keyframes routerLeave {
    0% {opacity: 1;}
    100% {opacity: 0;}
  }

  @keyframes buttonEnter {
    0% {transform: scale(0);}
    100% {transform: scale(1);}
  }

  @keyframes buttonLeave {
    0% {transform: scale(1);}
    100% {transform: scale(0);}
  }
/*  * {
    box-sizing: border-box;
  }
  html,
  body {
    width: 100%;
    height: 100%;
    background-color: #FAFAFA;
  }

  h2 {
    font-size: 22px;
    font-weight: normal;
    text-align: center;
    color: #797979;
  }

  main.content {
    padding: 0px 0px 32px 300px !important;
  }
  

  .application .application--wrap {
    position: relative;
    min-height: auto;
  }

  .card__title {
    justify-content: center;
  }

  .title__icon {
    font-size: 35px;
    margin: 0 10px;
  }

  .input-group__details .input-group__error {
    display: block;
    flex:none;
  }
  
  .buttons {
    width: 100%;
    height: 70px;
    margin-top: 40px;
    text-align: center;
  }
  .routerEnter {
    animation: routerEnter .6s;
  }

  .routerLeave {
    animation: routerLeave .6s;
  }

  .buttonEnter {
    animation: buttonEnter .3s cubic-bezier(.09,.9,.48,1.64);
  }

  .buttonLeave {
    animation: buttonLeave .3s cubic-bezier(.52,-0.44,.88,-0.45);
  }

  @keyframes routerEnter {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }

  @keyframes routerLeave {
    0% {opacity: 1;}
    100% {opacity: 0;}
  }

  @keyframes buttonEnter {
    0% {transform: scale(0);}
    100% {transform: scale(1);}
  }

  @keyframes buttonLeave {
    0% {transform: scale(1);}
    100% {transform: scale(0);}
  }*/
 
</style>