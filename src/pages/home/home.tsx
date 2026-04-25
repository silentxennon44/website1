import { useState } from "react";
import styles from "./styles.module.scss";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import { useNavigate } from "react-router";

function Home() {
  const [open, setOpen] = useState(true);
  const [agreed, setAgreed] = useState(false);
  const [isDisabled, setIdDisabled] = useState(true);
  const navigate = useNavigate();

  return (
    <main className={styles.home}>
      <section className={styles.notice}>
        <span>
          <i>
            <ErrorOutlineIcon />
          </i>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </span>
      </section>
      <section
        className={styles.content}
        onScroll={(e) => {
          const el = e.currentTarget;

          const isBottom =
            el.scrollTop + el.clientHeight >= el.scrollHeight - 1;

          if (isBottom) {
            setIdDisabled(false)
          }
        }}
      >
        {new Array(10).fill(null).map((_, index) => (
          <p key={index}>
            Dolor elit cillum cupidatat dolor aute ut incididunt cillum. Amet
            sit sint occaecat voluptate cillum laboris. Sunt cillum esse mollit
            ea irure veniam reprehenderit non qui ea. Ad Lorem commodo enim
            incididunt excepteur et pariatur Lorem. Est consectetur officia qui
            incididunt esse dolor magna do. Irure aute incididunt adipisicing
            sit et pariatur eu consectetur magna magna in tempor cillum
            proident. Ea irure incididunt amet non Lorem Lorem deserunt ut eu
            magna cillum proident quis. Irure ullamco voluptate consectetur
            aliqua veniam. Aliqua non duis commodo ad est id sint nisi id eu
            nisi ipsum. Aliqua excepteur voluptate cillum adipisicing commodo
            non anim sunt velit officia sint ex ex magna. Do sint qui minim
            exercitation magna in est in sint eiusmod. Esse dolore duis mollit
            Lorem Lorem. Velit sit esse excepteur voluptate quis mollit laborum
            minim aliquip. Ipsum deserunt amet mollit minim cupidatat incididunt
            nulla Lorem officia in exercitation laboris. Minim consequat fugiat
            laboris excepteur do ullamco cupidatat reprehenderit esse do culpa
            aliquip occaecat et. Pariatur laboris non nostrud consectetur
            reprehenderit ullamco non Lorem nisi sit aliquip id. Minim
            incididunt magna proident pariatur cupidatat sint sunt occaecat et
            veniam nisi voluptate exercitation officia. Ea magna sint culpa
            esse. Qui et veniam laborum voluptate laboris commodo Lorem
            incididunt Lorem velit adipisicing amet. Proident ullamco cillum
            enim laboris ut. Magna veniam tempor commodo nostrud magna proident
            occaecat in eu occaecat.
          </p>
        ))}
      </section>
      <section className={styles.pageActions}>
        <FormGroup>
          <FormControlLabel
            required
            control={
              <Checkbox
                checked={agreed}
                disabled={isDisabled}
                onChange={(e) => setAgreed(e.target.checked)}
              />
            }
            label="I Agree to the Terms and Conditions"
            sx={{
              "& .MuiFormControlLabel-asterisk": {
                color: "red",
              },
            }}
          />
        </FormGroup>
        <button
          disabled={isDisabled || !agreed}
          className="defaultButton"
          onClick={() => navigate("/register")}
        >
          Proceed
        </button>
      </section>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="Reminder-title"
        aria-describedby="Reminder-description"
        className={styles.dialog}
      >
        <DialogTitle id="Reminder-title">{"Reminder"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="Reminder-description" component={"section"}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, in nostrum quas accusantium laborum minima debitis
              autem ducimus aut molestiae doloremque, dolore illum numquam
              laboriosam vero quae nobis quis. Expedita?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, in nostrum quas accusantium laborum minima debitis
              autem ducimus aut molestiae doloremque, dolore illum numquam
              laboriosam vero quae nobis quis. Expedita?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, in nostrum quas accusantium laborum minima debitis
              autem ducimus aut molestiae doloremque, dolore illum numquam
              laboriosam vero quae nobis quis. Expedita?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, in nostrum quas accusantium laborum minima debitis
              autem ducimus aut molestiae doloremque, dolore illum numquam
              laboriosam vero quae nobis quis. Expedita?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, in nostrum quas accusantium laborum minima debitis
              autem ducimus aut molestiae doloremque, dolore illum numquam
              laboriosam vero quae nobis quis. Expedita?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, in nostrum quas accusantium laborum minima debitis
              autem ducimus aut molestiae doloremque, dolore illum numquam
              laboriosam vero quae nobis quis. Expedita?
            </p>
          </DialogContentText>
        </DialogContent>
        <DialogActions className={styles.dialogActions}>
          <button onClick={() => setOpen(false)} className="defaultButton">
            Continue
          </button>
          <button
            onClick={() => navigate("/welcome")}
            className="defaultButton !bg-white !text-[#0256a5] !shadow-none"
          >
            Exit
          </button>
        </DialogActions>
      </Dialog>
    </main>
  );
}

export default Home;
