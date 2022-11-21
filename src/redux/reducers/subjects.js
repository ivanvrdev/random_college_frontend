const initialState = {
  list: [],
  selected: null,
  grades: null,
  inassistence: null
}

const subjectsReducer = (state = initialState, action) => {

  const {type, payload} = action

  const actions = {
    'LOAD_SUBJECTS': () => ({...state, list: payload}),
    'FIND_SUBJECT': () => {
      const selected = state.list.find(subject => subject._id === payload)
      return {...state, selected}
    },
    'SELECT_SUBJECT': () => ({...state, selected: payload}),
    'LOAD_SELECTED_SUBJECT_POSTS': () => ({...state, selected: {...state.selected, posts: payload}}),
    'FIND_STUDENT_DATA': () => {
      const studentData = state.selected.students.find(student => student.user._id === payload)

      const { grades, assistence } = studentData

      return {...state, grades, inassistence: state.selected.total_lessons - assistence}
    }
  }

  return actions[type] ? actions[type]() : state
}

export default subjectsReducer