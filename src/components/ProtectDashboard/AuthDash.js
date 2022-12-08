
export const useAuth=()=>{
  return JSON.parse(sessionStorage.getItem("user"))
}

