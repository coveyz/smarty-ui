import { createApp } from 'vue';
import SButton from './button';
import SFCButton from './button/SFCButton.vue';
import JSXButton from './button/JSXButton';

// createApp(SButton).mount('#app')
// createApp(SFCButton).mount('#app')
createApp(JSXButton).mount('#app')