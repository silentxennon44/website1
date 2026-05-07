import styles from "./styles.module.scss";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import classNames from "classnames";
import { Box } from "@mui/material";
import { RegistrationLabels } from "@/static/staticData";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { setCurrentStep } from "@/store/actions/RegistrationSteps";

function Summary() {
  const dispatch = useAppDispatch();

  const registrationInformation = useAppSelector(
    (state) => state.RegistrationInformation,
  );

  console.log(registrationInformation);  return (
    <section className={classNames(styles.summary, styles.slide)}>
    {
  Object.entries(registrationInformation).map(
    ([sectionKey, sectionValue]: [string, Record<string, unknown>]) => {
      const sectionLabel =
        RegistrationLabels[
          sectionKey as keyof typeof RegistrationLabels
        ];

      return (
        <Accordion key={sectionKey}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                pr: 2,
              }}
            >
              <Typography fontWeight={600}>
                {sectionLabel.section}
              </Typography>

              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();

                  dispatch(
                    setCurrentStep(sectionLabel.step)
                  );
                }}
              >
                <EditIcon fontSize="small" />
              </IconButton>
            </Box>
          </AccordionSummary>

          <AccordionDetails>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
            }}
            >
              {Object.entries(sectionValue).map(([key, value]) => (
                <Box
                  key={key}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: "1px solid #eee",
                    pb: 1,
                  }}
                >
                  <Typography fontWeight={500}>
                    {
                      sectionLabel.fields[
                        key as keyof typeof sectionLabel.fields
                      ]
                    }
                  </Typography>

                  <Typography>
                    {typeof value === "boolean"
                      ? value
                        ? "Yes"
                        : "No"
                      : String(value)}
                  </Typography>
                </Box>
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      );
    }
  )
}
    </section>
  )
}

export default Summary