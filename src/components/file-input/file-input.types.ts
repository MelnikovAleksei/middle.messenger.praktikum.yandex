export interface IFileInputProps {
  attributes: {
    class?: 'file-input',
    accept: 'image/png, image/jpeg' | '.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    id: string,
    disabled?: 'true',
    form?: string,
    name?: string,
    required?: 'true',
    value?: string
  }
}
