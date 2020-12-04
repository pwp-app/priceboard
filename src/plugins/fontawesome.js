import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faTimes, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPlus);
library.add(faTimes);
library.add(faSpinner);
library.add(faGithub);

Vue.component('font-awesome-icon', FontAwesomeIcon);
