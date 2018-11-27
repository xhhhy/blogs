import http from '../http';

export default {
    getTitle:{
        async getTitle(){
            return await http.get('/home')
        },
        async gettabledata(){
            return await http.get('/table')
        }
    },
    Submission:{
        async Submission(from){
            return await http.post('/from',from)
        },
    },
};
