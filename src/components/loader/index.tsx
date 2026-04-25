import { useAppSelector } from "@/store/hooks/hooks"
import { useEffect } from "react"
import styles from "styles.module"

function Loader() {
  const { isPageLoading } = useAppSelector(state=>state.Loader)

  useEffect(()=>{
    console.log("asdasdasdasd",isPageLoading)
  },[isPageLoading])
  return (
    // <div>Loader</div>
    <></>
  )
}

export default Loader