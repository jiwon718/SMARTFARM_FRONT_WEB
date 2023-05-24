import { FormControlLabel, Checkbox } from "@mui/material";

const CheckBoxWithLabel = ({ text, sx }) => {
    return (
        <FormControlLabel
            control={<Checkbox defaultChecked color='info'/>}
            label={text}
            sx={sx}
        />
    );
};

export default CheckBoxWithLabel;