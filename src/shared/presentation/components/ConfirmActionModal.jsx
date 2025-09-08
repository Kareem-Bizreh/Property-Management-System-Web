import {useState} from 'react';
import {Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions} from '@mui/material';

export default function ConfirmActionModalWithMUI({open, onClose, onConfirm, withReason = true, type = "الرفض"}) {
    const [reason, setReason] = useState('');

    const handleConfirm = () => {
        onConfirm(reason);
        setReason('');
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{`تأكيد ${type}`}</DialogTitle>
            {withReason &&
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label={`سبب ${type}`}
                        fullWidth
                        variant="standard"
                        value={reason}
                        onChange={e => setReason(e.target.value)}
                    />
                </DialogContent>}
            <DialogActions>
                <Button onClick={onClose}>إلغاء</Button>
                <Button onClick={handleConfirm} variant="contained" color="error">تأكيد</Button>
            </DialogActions>
        </Dialog>
    );
}
