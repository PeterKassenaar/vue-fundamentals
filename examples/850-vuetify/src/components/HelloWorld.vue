<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h2>Example of an Alert component</h2>
        <p><a href="https://vuetifyjs.com/en/components/alerts/" target="_blank">https://vuetifyjs.com/en/components/alerts/</a>
        </p>
        <v-alert
            type="success">
          All went OK!
        </v-alert>
        <hr>
        <h2>Example of a Card component</h2>
        <p><a href="https://vuetifyjs.com/en/components/cards/" target="_blank">https://vuetifyjs.com/en/components/cards/</a>
        </p>
        <v-card
            elevation="2">
          <v-img
              height="250"
              src="https://www.lunch.nl/wp-content/uploads/2021/02/broodjes-bestellen-667x500.jpg"
          ></v-img>

          <v-card-title>My lunch box</v-card-title>
          <v-card-text>
            <v-row
                align="center"
                class="mx-0">
              <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
              ></v-rating>

              <div class="grey--text ms-4">
                4.5 (413)
              </div>
            </v-row>

            <div class="my-4 text-subtitle-1">
              Continental breakfast and lunch
            </div>

            <div>Salads & sandwiches - Eating healthy is a good start of the day.</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-btn
                color="deep-purple lighten-2"
                text
                @click="order"
            >
              Order a lunch!
            </v-btn>
          </v-card-actions>
        </v-card>
        <hr>
        <h2>More Vuetify:</h2>
        <p><a href="https://vuetifyjs.com/en/" target="_blank">https://vuetifyjs.com/en/</a></p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader',
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify',
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify',
      },
    ],
    importantLinks: [
      {
        text: 'Documentation',
        href: 'https://vuetifyjs.com',
      },
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com',
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs',
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify',
      },
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com/components/api-explorer',
      },
      {
        text: 'Select a layout',
        href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
      },
    ],
  }),
}
</script>
