import styles from "./styles.module.scss"
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";

function Welcome() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate()


  return (
    <main className={styles.welcome}>
      <h1 className={styles.title}>Welcome to adsasdas online registrion facility</h1>
      <section className={styles.content}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, in nostrum quas accusantium laborum minima debitis autem ducimus aut molestiae doloremque, dolore illum numquam laboriosam vero quae nobis quis. Expedita?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, in nostrum quas accusantium laborum minima debitis autem ducimus aut molestiae doloremque, dolore illum numquam laboriosam vero quae nobis quis. Expedita?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, in nostrum quas accusantium laborum minima debitis autem ducimus aut molestiae doloremque, dolore illum numquam laboriosam vero quae nobis quis. Expedita?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, in nostrum quas accusantium laborum minima debitis autem ducimus aut molestiae doloremque, dolore illum numquam laboriosam vero quae nobis quis. Expedita?</p>
      </section>
      <button className="defaultButton" onClick={()=>navigate("/home")}>Get Started</button>
      <Dialog
        open={open}
        onClose={()=>setOpen(false)}
        aria-labelledby="Reminder-title"
        aria-describedby="Reminder-description"
        className={styles.dialog}
      >
        <DialogTitle id="Reminder-title">
          {"Reminder"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="Reminder-description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, in nostrum quas accusantium laborum minima debitis autem ducimus aut molestiae doloremque, dolore illum numquam laboriosam vero quae nobis quis. Expedita?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, in nostrum quas accusantium laborum minima debitis autem ducimus aut molestiae doloremque, dolore illum numquam laboriosam vero quae nobis quis. Expedita?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, in nostrum quas accusantium laborum minima debitis autem ducimus aut molestiae doloremque, dolore illum numquam laboriosam vero quae nobis quis. Expedita?</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions className={styles.dialogActions}>
          <button onClick={()=>setOpen(false)} className="defaultButton">Disagree</button>
          <button onClick={()=>navigate('/welcome')} className="defaultButton !bg-white !text-[#0256a5] !shadow-none">Back to Login Page</button>
        </DialogActions>
      </Dialog>
    </main>
  )
}

export default Welcome