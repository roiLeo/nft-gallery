import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library, config } from '@fortawesome/fontawesome-svg-core'

// nuxt will handle css
config.autoAddCss = false

import {
  faPaperPlane,
  faFileImage,
  faPlus,
  faSync,
  faTimes,
  faTimesCircle,
  faTrash,
  faCloudDownloadAlt,
  faKey,
  faExternalLinkAlt,
  faUpload,
  faUsers,
  faQuestionCircle,
  faMinus,
  faSearch,
  faInfoCircle,
  faChevronDown,
  faChevronUp,
  faChevronLeft,
  faChevronRight,
  faHeart,
  faCaretDown,
  faCaretUp,
  faInfo,
  faShareSquare,
  faCopy,
  faBookmark,
  faLink,
  faLanguage,
  faQuestion,
  faPrint,
  faMagic,
  faEye,
  faCommentAlt,
  faDice,
  faGhost,
  faCode,
  faLeaf,
  faFlask,
  faCameraRetro,
  faTag,
  faShareAlt,
  faShare,
  faExclamationTriangle,
  faCalendar,
  faCalculator,
  faEnvelope,
  faClock,
  faArrowsAlt,
  faCompressAlt,
  faCompress,
  faCompressArrowsAlt,
  faAngleLeft,
  faAngleRight,
  faReply,
  faExternalLinkSquareAlt,
  faGift,
  faThLarge,
  faTh,
  faEyeSlash,
  faArrowUp,
  faUser,
  faGlobe,
  faExclamationCircle,
  faFilter,
  faQrcode,
  faFire,
  faMoneyBill,
  faMoneyBillAlt,
  faPalette,
  faHistory,
  faEllipsisH,
  faLightbulb,
  faCube,
  faExpand,
  faImage,
} from '@fortawesome/free-solid-svg-icons'

// throws error, idk why
import {
  faCommentDots,
  faThumbsUp,
  faThumbsDown,
} from '@fortawesome/free-regular-svg-icons'

import {
  faTwitter,
  faLine,
  faTelegram,
  faFacebook,
  faFacebookMessenger,
  faTelegramPlane,
  faMedium,
  faWhatsapp,
  faPinterest,
  faWpexplorer,
  faDiscord,
  faRedditAlien,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faPaperPlane,
  faFileImage,
  faPlus,
  faSync,
  faTimes,
  faTimesCircle,
  faCopy,
  faTrash,
  faCloudDownloadAlt,
  faKey,
  faExternalLinkAlt,
  faUpload,
  faUsers,
  faQuestionCircle,
  faMinus,
  faSearch,
  faInfoCircle,
  faChevronDown,
  faChevronUp,
  faChevronLeft,
  faChevronRight,
  faCaretDown,
  faCaretUp,
  faInfo,
  faShareSquare,
  faBookmark,
  faLink,
  faHeart,
  faLanguage,
  faQuestion,
  faEye,
  faPrint,
  faCommentAlt,
  faMagic,
  faDice,
  faLeaf,
  faFlask,
  faCalendar,
  faEnvelope,
  faClock,
  faCommentDots,
  faGhost,
  faCode,
  faWpexplorer,
  faRedditAlien,
  faCameraRetro,
  faTag,
  faShareAlt,
  faShare,
  faExclamationTriangle,
  faCalculator,
  faArrowsAlt,
  faCompressAlt,
  faCompress,
  faCompressArrowsAlt,
  faEyeSlash,
  faArrowUp,
  faUser,
  faGlobe,
  faExclamationCircle,
  faFilter,
  faQrcode,
  faGift,
  faThLarge,
  faTh,
  faFire,
  faMoneyBill,
  faMoneyBillAlt,
  faPalette,
  faHistory,
  faEllipsisH,
  faLightbulb,
  faCube,
  faExpand,
  faImage,

  // Social
  faTwitter,
  faTelegram,
  faFacebook,
  faFacebookMessenger,
  faDiscord,
  faLine,
  faTelegramPlane,
  faWhatsapp,
  faPinterest,
  faMedium,
  faAngleLeft,
  faAngleRight,
  faReply,
  faThumbsUp,
  faThumbsDown,
  faExternalLinkSquareAlt,
  faYoutube
)

Vue.component('vue-fontawesome', FontAwesomeIcon)
