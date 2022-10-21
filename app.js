const app = Vue.createApp({
  data() {
    return {
      yourName: "Giorgi",
      yourAge: 21,
      imgURL:
        "https://styles.redditmedia.com/t5_2r5i1/styles/communityIcon_x4lqmqzu1hi81.jpg",
    };
  },
  methods: {
    ageSum() {
      return this.yourAge + 5;
    },
    randomNum() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
