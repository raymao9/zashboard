import { LANG } from '@/constant'
import { language } from '@/store/settings'
import { createI18n } from 'vue-i18n'
import en from './en'
import zh_cn from './zh-cn'
import zh_tw from './zh-tw'

export const i18n = createI18n({
  locale: language.value,
  messages: {
    [LANG.EN_US]: en,
    [LANG.ZH_TW]: zh_tw,
    [LANG.ZH_CN]: zh_cn,
  },
})
