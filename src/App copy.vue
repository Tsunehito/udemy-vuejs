<template>
  <div style="padding: 10rem;">
    <LikeHeader>
      <h3>はじめまして</h3>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <div>
      <h2>イベントのフォーム</h2>
      <EventTitle v-model="eventData.title"></EventTitle>
    </div> 
    <div>
      <lable for="maxNumber">最大人数</lable>
      <input
        id="maxNumber"
        type="number"
        v-model.number="eventData.maxNumber"
      />
      <p>{{ eventData.maxNumber }}</p>
    </div>
    <div>
      <lable for="host">主催者</lable>
      <input
        id="host"
        type="text"
        v-model.trim="eventData.host"
      />
      <pre>{{ eventData.host }}</pre>
      <label for="detail">イベントの詳細</label>
      <textarea name="detail" id="detail" cols="30" rows="10" v-model="eventData.detail"></textarea>
      <pre style="white-space: pre;">{{ eventData.detail }}</pre>
      <input 
        type="checkbox" 
        id="isPrivate"
        v-model="eventData.isPrivate"
      >
      <label for="isPrivate">非公開</label>
      <p>{{ eventData.isPrivate }}</p>
      <p>参加条件</p>
      <input 
        type="checkbox"
        id="10"
        value="10代"
        v-model="eventData.target"
      >
      <label for="10">10代</label>
      <input 
        type="checkbox"
        id="20"
        value="20代"
        v-model="eventData.target"
      >
      <label for="20">20代</label>
      <input 
        type="checkbox"
        id="30"
        value="30代"
        v-model="eventData.target"
      >
      <label for="30">30代</label>
      <p>{{ eventData.target }}</p>
      <p>参加費</p>
      <input 
        type="radio"
        id="free" 
        value="無料"
        v-model="eventData.price"
      >
      <label for="free">無料</label>
      <input 
        type="radio"
        id="paid" 
        value="有料"
        v-model="eventData.price"
      >
      <label for="paid">有料</label>
      <p>開催場所</p>
      <select v-model="eventData.location" multiple>
        <option 
          v-for="location in locations"
          :key="location">{{ location }}</option>
      </select>
      <p>{{ eventData.location }}</p>
    </div>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader";
import About from "./components/About.vue";
import Home from "./components/Home.vue";
import EventTitle from "./components/EventTitle.vue";

export default {
  data() {
    return {
      number: 14,
      currentComponent: "Home",
      locations: ["Tokyo", "Osaka", "Nagaya", "Okinawa"],
      eventData: {
        title: "タイトル",
        maxNumber: 0,
        host: "",
        detail: "",
        isPrivate: false,
        target: [],
        price: "無料",
        location: "Tokyo",
      },
    };
  },
  components: {
    LikeHeader,
    About,
    Home,
    EventTitle,
  },
  methods: {
    incrementNumber(value) {
      this.number = value;
    },
  },
};
</script>