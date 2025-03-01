<template >
    <div class="container min-h-screen my-16">
        <div class="grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-8">
            <div class="xl:col-span-2 lg:col-span-2 bg-white p-4 rounded-[16px] shadow-shadow1 ">
dsdsd
            </div>
            <div class="">
dsdsd
                <VueDatePicker v-model="date" inline auto-apply />

            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { number, object, string, type InferType } from 'yup'
import type { FormSubmitEvent, Form, FormErrorEvent } from '#ui/types'
const { t, locale } = useI18n();
let router = useRouter();
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
const localePath = useLocalePath();

const date = ref(new Date());
const schema = object({
  email: string().email('Invalid email').required(t('Required')),
  message: string().required(t('Required')),
  title: string().required(t('Required')),
  name: string().required(t('Required')),
  terms_and_privacy: string().required(t('Required')),
  phone: string().required(t('Required')),
})

type Schema = InferType<typeof schema>
let pendingBtn = ref(false);
</script>
<style lang="">
    
</style>