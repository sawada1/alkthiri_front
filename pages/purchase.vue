<template>
    <div class="min-h-screen">
        <div class="container my-16">

            <h1 class="headText font-bold purchase mb-10 text-primary xl:text-[42px] lg:text-[42px] text-[32px]" :data-purchase="$t('FIND WHAT YOU NEED')"> {{ $t('PURCHASE ORDER') }} </h1>
            <div class="grid xl:grid-cols-2 lg:grid-cols-2 gap-8">
                <div class=" relative">
                    <div v-if="store.checkStatus == 1" class="sticky top-5"> <CarCard :car="chosenCar"></CarCard> </div>
                    <div v-if="store.checkStatus == 2" class="sticky top-5">
                      <div class="bg-[#f2f2f2] rounded-xl p-3 text-primary">
                         <span> {{ $t('Or please fill the form below: You will receive a reply within a maximum of 24 hours.') }} </span>
                      </div>
                      <p class="mt-4">{{ $t("text purchase") }}</p>
                      <div class="flex flex-col gap-3 mt-4">
                         <div class="flex items-center gap-3">
                             <UIcon name="material-symbols:call-sharp" class="w-5 h-5 text-primary-500" />
                             <h4 class="font-bold"> 
                                 {{ $t("mobile number") }} :
                                 <span class="font-[400]"> {{ store2.generalData?.phone }}</span>   
                             </h4>
                         </div>
                         <div class="flex items-center gap-3">
                             <UIcon name="material-symbols-light:mail" class="w-5 h-5 text-primary-500" />
                             <h4 class="font-bold"> 
                                 {{ $t("email") }} :
                                 <span class="font-[400]"> {{ store2.generalData?.email }}</span>   
                             </h4>
                         </div>
                         <div class="flex items-center gap-3">
                             <UIcon name="mage:whatsapp" class="w-5 h-5 text-primary-500" />
                             <h4 class="font-bold"> 
                                 {{ $t("Whatsapp") }} :
                                 <a
                         target="_blank"
                         :href="`https://wa.me/${store2.generalData?.whatsapp}`"
                         class="click font-normal"
                         >{{ $t("click here") }}</a
                       >  
                             </h4>
                         </div>
                      </div>
                    </div>


                </div>
               <div class="bg-white shadow-shadow1 rounded-[16px] p-4">
                  <div class="flex items-center justify-center gap-9">
                     <button @click="store.checkStatus = 1" class="text-[#b0b0b0] text-[22px] border-b-[1px] relative " :class="{'activePurchaseBtn': store.checkStatus == 1}"> {{ $t('individuals') }} </button>
                     <div class="w-[12px] h-[12px] bg-tw-grey rounded-full"></div>
                     <button @click="store.checkStatus = 2" class="text-[#b0b0b0] text-[22px] border-b-[1px] relative" :class="{'activePurchaseBtn': store.checkStatus == 2}"> {{ $t('corporate') }} </button>
                  </div>
                  <div class="bg-tw-grey w-full h-[1px]"></div>
                   <OrderIndOrder v-if="store.checkStatus == 1" class="mt-10"></OrderIndOrder>
                   <OrderCorparate v-if="store.checkStatus == 2" class="mt-10"></OrderCorparate>
               </div>
            </div>
            
        </div>
    </div>
</template>
<script setup>
import {useOrderStore} from '@/stores/order'
import {useGeneralStore} from '@/stores/general';
let store = useOrderStore();
let route = useRoute();
const { t, locale } = useI18n();

let model_id = route.query.model_id;
let color_id = route.query.color_id;
let car_id = route.query.id;
let store2 = useGeneralStore();
let chosenCar = ref();
let getCar = async()=>{
    let result = await useApi().get(`car-details/${car_id}`);
    if(result.status == 200){
        chosenCar.value = result.data?.data;
    }
}
onMounted(() => {
   store.getPurchaseData();
   getCar(); 
});

useHead({
      title: `${t('PURCHASE ORDER')}`,
      meta: [
        { name: 'description', content: 'test' },
        { name: 'keywords', content: 'test , test , test'},
        { name: 'author', content: 'webstdy' },
        { property: 'og:title', content: `${t('home')}` },
        { property: 'og:description', content: 'test' },
      ],
    });
</script>
<style lang="scss">
 .activePurchaseBtn{
    font-weight: 700;
    color: #1b395f;
    &::before{
        content: '';
        position: absolute;
        top: 101%;
        background-color: #1b395f;
        width: 100%;
        height: 1px;
    }
 }
</style>