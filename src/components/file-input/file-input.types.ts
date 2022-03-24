export interface IFileInputProps {
  customValidity?: string;
  attributes: {
    class?: 'file-input';
    accept: string;
    id: string;
    disabled?: 'true';
    form?: string;
    name?: string;
    required?: 'true';
    value?: string;
  }
}
