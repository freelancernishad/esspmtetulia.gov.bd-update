<template>
    <div>
        <form @submit.stop.prevent="onSubmit">

            <!-- <div class="panel-heading" style="font-weight: bold; font-size: 20px;background:#159513;text-align:center;color:white">{{ sonodnamedata.bnname }} </div> -->
            <div class="panel-heading"
                style="font-weight: bold; font-size: 20px;background:#159513;text-align:center;color:white">রেজিস্টেশন </div>


            <div class="form-pannel">

                <div class="row">






                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="" class="labelColor">সহায়তার ধরন<span class="text-danger"></span></label>
                            <select class="form-control" v-model="form.vataName" required>
                                <option value="">সহায়তার ধরন নির্বাচন করুন</option>
                                <option>মুক্তিযোদ্ধা ভাতা</option>
                                <option>বয়স্ক ভাতা</option>
                                <option>বিধবা ভাতা</option>
                                <option>প্রসূতি ভাতা</option>
                                <option>প্রতিবন্ধী ভাতা</option>
                                <option>ভিডিজি/ভিজিএফ</option>
                                <option>অন্যান্য</option>
                            </select>

                        </div>
                    </div>


                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="" class="labelColor">সুবিধাভোগীর নাম<span
                                    class="text-danger"></span></label>
                            <input type="text" class="form-control" v-model="form.name" required>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="" class="labelColor">জাতীয় পরিচয়পত্র নম্বর<span
                                    class="text-danger"></span></label>
                            <input type="text" class="form-control" v-model="form.nidNo" required>
                        </div>
                    </div>


                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="" class="labelColor">মোবাইল নম্বর<span class="text-danger"></span></label>
                            <input type="text" class="form-control" v-model="form.mobileNo" required>
                        </div>
                    </div>


                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="" class="labelColor">পেশা<span class="text-danger"></span></label>
                            <input type="text" class="form-control" v-model="form.occupation" required>
                        </div>
                    </div>




                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="" class="labelColor">জন্ম তারিখ</label>
                            <div class="d-flex">
                            <select class="form-control" v-model="burthdate.year" required>
                                <option value="">সাল নির্বাচন করুন</option>
                                <option v-for="year in yearsList">{{ year }}</option>
                            </select>

                            <select class="form-control" v-model="burthdate.month" @change="getdays" required>
                                <option value="">মাস নির্বাচন করুন</option>
                                <option v-for="month in monthsList">{{ month }}</option>
                            </select>

                            <select class="form-control" v-model="burthdate.day" required>
                                <option value="">তারিখ নির্বাচন করুন</option>
                                <option v-for="day in daysList">{{ day }}</option>
                            </select>
                        </div>

                        </div>
                    </div>



                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="" class="labelColor">পিতা/স্বামী</label>

                            <select v-model="form.father_husband" class="form-control">
                                <option value="পিতা">পিতা</option>
                                <option value="স্বামী">স্বামী</option>
                            </select>
                        </div>
                    </div>



                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="" class="labelColor" v-if="form.father_husband=='পিতা'">পিতার নাম</label>
                            <label for="" class="labelColor" v-else-if="form.father_husband=='স্বামী'">স্বামীর নাম</label>
                            <input type="text" class="form-control" v-model="form.father_husbandName" required>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="" class="labelColor"  v-if="form.father_husband=='পিতা'">পিতার জাতীয় পরিচয়পত্র নম্বর</label>
                            <label for="" class="labelColor" v-else-if="form.father_husband=='স্বামী'">স্বামীর জাতীয় পরিচয়পত্র নম্বর</label>
                            <input type="text" class="form-control" v-model="form.father_husbandNid" required>
                        </div>
                    </div>


                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="" class="labelColor">স্ত্রীর নাম</label>
                            <input type="text" class="form-control" v-model="form.wifeName" required>
                        </div>
                    </div>


                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="" class="labelColor">স্ত্রীর জাতীয় পরিচয়পত্র নম্বর</label>
                            <input type="text" class="form-control" v-model="form.wifeNid" required>
                        </div>
                    </div>


                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="" class="labelColor">পরিবারের সদস্য সংখ্যা</label>
                            <input type="text" class="form-control" v-model="form.familyMenber" required>
                        </div>
                    </div>







                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="" class="labelColor">বিভাগ</label>

                            <select class='form-control' name="division" id="division" v-model="Pdivision" @change="getdistrictFun" required>
                                <option value="">বিভাগ নির্বাচন করুন</option>
                                <option v-for="div in getdivisions" :key="div.id" :value="div.id">{{ div.bn_name }}
                                </option>
                            </select>

                            <!-- <input type="text" class="form-control" v-model="form.applicant_present_district"> -->
                        </div>
                    </div>

                    <div class="col-md-4">
                    <div class="form-group">
                        <label for="" class="labelColor">জেলা</label>

                        <select class='form-control' name="district" id="district" v-model="applicant_present_district" @change="getthanaFun" required>
                            <option value="">জেলা নির্বাচন করুন</option>
                            <option v-for="dist in getdistricts" :key="dist.id" :value="dist.id">{{ dist.bn_name }}
                            </option>
                        </select>

                        <!-- <input type="text" class="form-control" v-model="form.applicant_present_district"> -->
                    </div>
                </div>



                <div class="col-md-4">
                    <div class="form-group">
                        <label for="" class="labelColor">উপজেলা/থানা</label>

                        <select class='form-control' name="thana" id="thana" v-model="thana" @change="getuniounFun" required>
                            <option value="">উপজেলা নির্বাচন করুন</option>
                            <option v-for="thana in getthanas" :key="thana.id" :value="thana.id">{{ thana.bn_name
                            }}</option>
                        </select>

                        <!-- <input type="text" class="form-control" v-model="form.applicant_present_Upazila"> -->
                    </div>
                </div>


                <div class="col-md-4">
                    <div class="form-group">
                        <label for="" class="labelColor">ইউনিয়ন</label>

                        <select class='form-control' name="thana" id="thana" v-model="form.unionName"  required>
                            <option value="">ইউনিয়ন নির্বাচন করুন</option>
                            <option v-for="union in getuniouns" :key="union.id" :value="union.bn_name">{{ union.bn_name
                            }}</option>
                        </select>


                    </div>
                </div>

                <div class="col-md-4">
                    <div class="form-group">
                        <label for="" class="labelColor">ওয়ার্ড নং</label>
                        <select v-model="form.wordNo" id="word_no" class="form-control" required>
                            <option value="">ওয়াড নং</option>
                            <option value="1">১</option>
                            <option value="2">২</option>
                            <option value="3">৩</option>
                            <option value="4">৪</option>
                            <option value="5">৫</option>
                            <option value="6">৬</option>
                            <option value="7">৭</option>
                            <option value="8">৮</option>
                            <option value="9">৯</option>

                        </select>
                        <!-- <input type="text" class="form-control" v-model="form.applicant_present_word_number"> -->
                    </div>
                </div>


                <div class="col-md-4">
                    <div class="form-group">
                        <label for="" class="labelColor">গ্রাম/মহল্লা</label>
                        <input type="text" class="form-control" v-model="form.village" required>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="form-group">
                        <label for="" class="labelColor">হোল্ডিং নং</label>
                        <input type="text" class="form-control" v-model="form.holdingNo" required>
                    </div>
                </div>



                </div>
















                <div style="text-align:center">
                    <b-button type="submit" variant="primary">সাবমিট</b-button>
                </div>
                <!-- <b-button class="ml-2" @click="resetForm()">রিসেট</b-button> -->
            </div>
        </form>
        <!-- Info modal -->
        <b-modal :id="infoModal.id" size="xl" :title="infoModal.title" ok-only ok-disabled no-close-on-esc
            no-close-on-backdrop>


            <div class="row">






<div class="col-md-4"><b>আইডি নং :</b> {{ form.id_no }}</div>
<div class="col-md-4"><b>সুবিধাভোগীর নাম :</b> {{ form.name }}</div>
<div class="col-md-4"><b>জাতীয় পরিচয়পত্র নম্বর :</b> {{ form.nidNo }}</div>
<div class="col-md-4"><b>মোবাইল নম্বর :</b> {{ form.mobileNo }}</div>
<div class="col-md-4"><b>পেশা :</b> {{ form.occupation }}</div>
<div class="col-md-4"><b>জন্ম তারিখ :</b> {{ form.dateOfBirth }}</div>
<div class="col-md-4"><b>পিতা/স্বামী :</b> {{ form.father_husband }}</div>
<div class="col-md-4"  v-if="form.father_husband=='পিতা'"><b>পিতার নাম :</b> {{ form.father_husbandName }}</div>
<div class="col-md-4"  v-if="form.father_husband=='স্বামী'"><b>স্বামী নাম :</b> {{ form.father_husbandName }}</div>
<div class="col-md-4"  v-if="form.father_husband=='পিতা'"><b>পিতার জাতীয় পরিচয়পত্র নম্বর :</b> {{ form.father_husbandNid }}</div>
<div class="col-md-4"  v-if="form.father_husband=='স্বামী'"><b>স্বামী জাতীয় পরিচয়পত্র নম্বর :</b> {{ form.father_husbandNid }}</div>
<div class="col-md-4" ><b>স্ত্রীর নাম :</b> {{ form.wifeName }}</div>
<div class="col-md-4" ><b>স্ত্রীর জাতীয় পরিচয়পত্র নম্বর  :</b> {{ form.wifeNid }}</div>
<div class="col-md-4" ><b>পরিবারের সদস্য সংখ্যা :</b> {{ form.familyMenber }}</div>
<div class="col-md-4"><b>বিভাগ :</b> {{ form.district }}</div>
<div class="col-md-4"><b>জেলা :</b> {{ form.district }}</div>
<div class="col-md-4"><b>উপজেলা/থানা :</b> {{ form.upazila }}</div>
<div class="col-md-4"><b>ইউনিয়ন :</b> {{ form.unionName }}</div>
<div class="col-md-4"><b>ওয়ার্ড নং :</b> {{ form.wordNo }}</div>
<div class="col-md-4"><b>গ্রাম/মহল্লা :</b> {{ form.village }}</div>
<div class="col-md-4"><b>হোল্ডিং নং :</b> {{ form.holdingNo }}</div>




</div>

            <form @submit.stop.prevent="finalSubmit" style="margin-top: 50px;">

                <div class="text-center" style="width:50%;margin:0 auto">
                    <h3>আপনার আবেদনটি সফল করার জন্য Confirm বাটন এ চাপ দিন</h3>
                    <button type="submit" class="btn btn-info" v-if="!submitLoad">Confirm</button>
                    <span class="btn btn-info" v-else-if="submitLoad">Please Wait...</span>
                </div>
            </form>

            <template #modal-footer>
                <div></div>
            </template>

        </b-modal>
    </div>
</template>
<script>
export default {
    data() {
        return {
            infoModal: {
                id: 'info-modal',
                title: '',
                content: '',
                content_id: '',
            },
            submitLoad: false,
            burthdate:{
                day:'',
                month:'',
                year:'',
            },

            yearsList:{},
            monthsList:[
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
                ],
                daysList:[],




            form: {
                id_no:'',
                vataName:'',
                name:'',
                nidNo:'',
                mobileNo:'',
                occupation:'',

                dateOfBirth:'',

                father_husband:'পিতা',
                father_husbandName:'',
                father_husbandNid:'',
                wifeName:'',
                familyMenber:'',
                division:'',
                district:'',
                upazila:'',
                unionName:'',
                wordNo:'',
                village:'',
                holdingNo:'',

            },
            getdivisions: {},
            getdistricts: {},
            getthanas: {},
            getuniouns: {},

            Pdivision: '',
            Perdivision: '',
            applicant_present_district: '',
            thana: '',
            applicant_permanent_district: '',
        };
    },
    watch: {
        '$route': {
            handler(newValue, oldValue) {
                this.form.year = new Date().getFullYear();
                this.sonodname();
            },
            deep: true
        }
    },

    methods: {


        async getdivisionFun() {
            var res = await this.callApi('get', `/api/getdivisions`, []);
            this.getdivisions = res.data;
        },

        async getdistrictFun() {
            var resdiv = await this.callApi('get', `/api/getdivisions?id=${this.Pdivision}`, []);
            // console.log(resdiv)
            this.form.division= resdiv.data.bn_name
            var res = await this.callApi('get', `/api/getdistrict?id=${this.Pdivision}`, []);
            this.getdistricts = res.data;




        },

        async getthanaFun() {
            var res = await this.callApi('get', `/api/getthana?id=${this.applicant_present_district}`, []);
            this.getthanas = res.data;
            var resOwn = await this.callApi('get', `/api/getdistrict?ownid=${this.applicant_present_district}`, []);
            this.form.district = resOwn.data.bn_name

        },

        async getuniounFun() {


            var ress = await this.callApi('get', `/api/getthana?ownid=${this.thana}`, []);
            // console.log(ress.data.bn_name);
            this.form.upazila = ress.data.bn_name;
            // this.getuniouns = ress.data;

            var res = await this.callApi('get', `/api/getunioun?id=${this.thana}`, []);
            this.getuniouns = res.data;


        },




        async onSubmit() {

            this.form.dateOfBirth = this.burthdate.day+'-'+this.burthdate.month+'-'+this.burthdate.year;

                this.$root.$emit('bv::show::modal', this.infoModal.id)
        },
        async finalSubmit() {
            this.submitLoad = true;



            var res = await this.callApi('post', '/api/sonod/submit', this.form);
            var datas = res.data;
            console.log(datas)


            if(datas=='abedonkari seba grohon koreche'){
                Swal.fire({
                    title: 'দুঃখিত',
                    text: `আপনি ইতিপূর্বে এই সেবাটি গ্রহন করেছেন`,
                    icon: 'error',
                    confirmButtonColor: 'red',
                    confirmButtonText: `close`,

                })
            }else if(datas=='abedonkarir pta seba grohon koreche'){
                Swal.fire({
                    title: 'দুঃখিত',
                    text: `আপনার পিতা ইতিপূর্বে এই সেবাটি গ্রহন করেছেন`,
                    icon: 'error',
                    confirmButtonColor: 'red',
                    confirmButtonText: `close`,

                })
            }else if(datas=='abedonkarir sami seba grohon koreche'){
                Swal.fire({
                    title: 'দুঃখিত',
                    text: `আপনার স্বামী ইতিপূর্বে এই সেবাটি গ্রহন করেছেন`,
                    icon: 'error',
                    confirmButtonColor: 'red',
                    confirmButtonText: `close`,

                })
            }else if(datas=='abedonkarir stri seba grohon koreche'){
                Swal.fire({
                    title: 'দুঃখিত',
                    text: `আপনার স্ত্রী ইতিপূর্বে এই সেবাটি গ্রহন করেছেন`,
                    icon: 'error',
                    confirmButtonColor: 'red',
                    confirmButtonText: `close`,

                })
            }


                // Swal.fire({
                //     title: 'অভিনন্দন',
                //     text: `আপনার রেজিস্টেশন সফলভাবে দাখিল হয়েছে`,
                //     icon: 'success',
                //     confirmButtonColor: 'green',
                //     confirmButtonText: `Ok`,

                // }).then(async (result) => {
                //     console.log(result)
                //     if (result.isConfirmed) {
                //         // this.$root.$emit('bv::hide::modal', 'info-modal')
                //         this.$router.push({ name: 'home' })
                //     } else if (result.isDenied) {
                //         // this.$root.$emit('bv::hide::modal', 'info-modal')
                //     } else if (result.isDismissed) {
                //         //cancel
                //         this.$router.push({ name: 'home' })
                //     }
                // })




        },

        getdays(){

            const monthName = this.burthdate.month;
            const year = this.burthdate.year;

            const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
            ];

            const monthNumber = monthNames.indexOf(monthName);
            const daysInMonth = new Date(year, monthNumber + 1, 0).getDate();

            // console.log(daysInMonth);

            for(var i =1;i<=daysInMonth;i++){
                // console.log(i)
                this.daysList.push(i);
            }



        },



    },
    mounted() {
        this.getdivisionFun();

var years = function(startYear) {
    var currentYear = new Date().getFullYear(), years = [];
    startYear = startYear || 1980;
    while ( startYear <= currentYear ) {
        years.push(startYear++);
    }
    return years;
}

this.yearsList = years().sort((a, b) => b - a);



    }
};
</script>
<style scoped >

.app-heading {
    text-align: center;
    margin: 32px 0;
    font-size: 23px;
    border-bottom: 1px solid #159513;
    color: #ffffff;
    background: #255f95;
}

.form-pannel {
    border: 1px solid #159513;
    padding: 25px 25px 25px 25px;
}

.panel-heading {
    padding: 11px 0px;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    margin-top: 20px;
}

.form-pannel {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
}

.dropdown-menu {
    z-index: 99999;
}

.labelColor {
    color: #493eff;
    font-weight: 600;
}
</style>
