import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";
import produce from "immer";

export default function FormDialog(props) {
  const [editValues, setEditValues] = useState({
    usuario: props.id,
    nome: props.nome,
    cpf: props.cpf,
    telefone: props.telefone,
    email: props.email

  });


  const handleEditUsuario = () => {
    Axios.put("http://localhost:3000/editar-usuario",{
      usuario: editValues.id,
      nome: editValues.nome,
      cpf: editValues.cpf,
      telefone: editValues.telefone,
      email: editValues.email
  
    })
    handleClose()
  }
  const handleChangeValues = (value) =>{
    setEditValues((prevvalues) =>({
      ...prevvalues,
      [value.target.id]: value.target.value,
    }))
  }

  const handleClickOpen = () => {
    props.setOpen(true)
  }

  const handleClose = () => {
    props.setOpen(false)
  }
  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Editar</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="usuario"
          defaultValue={props.usuario}
          onChange={handleChangeValues}
          label="Usuário"
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="nome"
          defaultValue={props.nome}
          onChange={handleChangeValues}
          label="Nome"
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="cpf"
          defaultValue={props.cpf}
          onChange={handleChangeValues}
          label="CPF"
          type="text"
          fullWidth
        /><TextField
          autoFocus
          margin="dense"
          id="telefone"
          defaultValue={props.telefone}
          onChange={handleChangeValues}
          label="Telefone"
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="email"
          defaultValue={props.email}
          onChange={handleChangeValues}
          label="E-mail"
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button color="primary">
          Excluir
        </Button>
        <Button color="primary" handleEditUsuario>
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
