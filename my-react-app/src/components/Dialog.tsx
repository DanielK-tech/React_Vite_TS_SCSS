import { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const COOKIE_CONSENT_KEY = "cookieConsentAcknowledged";

interface DialogProps {
  "client:load"?: boolean;
}

const Dialog: React.FC<DialogProps> = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const savedConsent = window.localStorage.getItem(COOKIE_CONSENT_KEY);

    if (!savedConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Box
      sx={{
        position: "fixed",
        right: 16,
        bottom: 16,
        left: 16,
        zIndex: 1600,
        display: "flex",
        justifyContent: "center",
        pointerEvents: "none",
      }}
    >
      <Paper
        elevation={10}
        sx={{
          maxWidth: 760,
          width: "100%",
          borderRadius: 3,
          border: "1px solid rgba(82, 55, 30, 0.18)",
          backgroundColor: "rgba(255, 248, 242, 0.97)",
          p: { xs: 2, sm: 2.5 },
          pointerEvents: "auto",
        }}
      >
        <Stack spacing={1.5}>
          <Alert
            severity="info"
            icon={false}
            sx={{
              p: 0,
              color: "#4f3324",
              backgroundColor: "transparent",
              "& .MuiAlert-message": { width: "100%", p: 0 },
            }}
          >
            <Typography
              component="h2"
              variant="h6"
              sx={{ fontWeight: 700, mb: 0.5 }}
            >
              Informace o cookies
            </Typography>
            <Typography variant="body2">
              Tento web používá pouze technické cookies a localStorage pro
              správné fungování stránek, uložení volby vzhledu a potvrzení
              tohoto oznámení. Nepoužíváme reklamní ani analytické trackery
              třetích stran.
            </Typography>
          </Alert>

          <Collapse in={showDetails}>
            <Box sx={{ color: "#6d4b36" }}>
              <Typography variant="body2" sx={{ mb: 0.75 }}>
                Ukládáme jen nezbytné údaje: potvrzení cookie lišty a nastavení
                světlého nebo tmavého režimu. Tyto informace neslouží k
                profilování návštěvníků a nikam se neodesílají pro marketing
                nebo analytiku.
              </Typography>
              <Typography variant="body2">
                Pokud nás kontaktujete formulářem, odešle se pouze obsah zprávy
                a váš e-mail na kontaktní adresu spolku.
              </Typography>
            </Box>
          </Collapse>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            justifyContent="space-between"
            alignItems={{ xs: "stretch", sm: "center" }}
          >
            <Button
              variant="text"
              onClick={() => setShowDetails((previousState) => !previousState)}
              sx={{ alignSelf: { xs: "stretch", sm: "flex-start" } }}
            >
              {showDetails ? "Skrýt podrobnosti" : "Zobrazit podrobnosti"}
            </Button>
            <Button variant="contained" color="success" onClick={handleAccept}>
              Rozumím
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Dialog;
