<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <friend-contact
        name="Manuel Lorenz"
        phone-number="01234567890"
        email-address="manuel@mail.ru"
        is-favorite="1"
      ></friend-contact>
      <friend-contact
        name="Julie Jones"
        phone-number="09876543210"
        email-address="julie@mail.ru"
        is-favorite="0"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 654421 21",
          email: "julie@localhost.com",
        },
      ],
    };
  },
};
</script>