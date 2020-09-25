const initialState = {
    docsList: [],
    doctorId: '',
    doctor: {},
    update: false
}

const doctors = (state = initialState, action) => {
    switch (action.type) {
        case "SET_DOCTORS":
            return {
                ...state,
                docsList: action.payload.docsList
            };
        case 'SET_DOCTOR_ID':
            return {
                ...state,
                doctorId: action.payload.doctorId
            };
        case 'SET_UPDATE':
            return {
                ...state,
                update: action.payload.value
            };
        case 'SET_DOCTOR':
            return{
                ...state,
                doctor: action.payload.doctor
            }
        default:
            return {
                ...state
            }
    }
}

export default doctors;