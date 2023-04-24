import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { addYear } from '../../store/slices/display/displaySlice';
import { RootState } from '../../store/store';
import { YearFormDialogMainButton, YearFormDialog } from './YearForm.styles';
import CalendarField from '../Forms/CalendarField';
import { isYearsUnique } from '../../utils/unique';

interface YearFormType {
  year: Date;
}

const YearForm = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const allYears: number[] = useSelector((state: RootState) => state.display.years);
  const [visible, setVisible] = useState(false);

  const toast = useRef<Toast>(null);

  const form = useForm<YearFormType>({});

  const onSubmit = (data: YearFormType) => {
    if (isYearsUnique(allYears, data.year.getFullYear())) {
      dispatch(addYear(data.year.getFullYear()));
      setVisible(false);
      toast.current?.show({
        severity: 'success',
        summary: t('info.service.update'),
        life: 3000,
      });
    } else {
      toast.current?.show({
        severity: 'error',
        summary: t('info.service.nameExists'),
        life: 3000,
      });
      form.setError('year', { type: 'focus' });
    }
  };

  const footerContent = (
    <div>
      <Button
        label={t('button.cancel').toString()}
        icon="pi pi-times"
        onClick={() => setVisible(false)}
        className="p-button-text"
      />
      <YearFormDialogMainButton
        label={t('button.save').toString()}
        icon="pi pi-check"
        onClick={form.handleSubmit(onSubmit)}
        autoFocus
      />
    </div>
  );

  return (
    <>
      <YearFormDialogMainButton
        label={t('button.addYear').toString()}
        onClick={() => setVisible(true)}
      />
      <Toast ref={toast} />
      <YearFormDialog
        header={t('yearForm.header.add')}
        visible={visible}
        onHide={() => setVisible(false)}
        footer={footerContent}
      >
        <CalendarField
          control={form.control}
          name={'year'}
          label={t('yearForm.label.year')}
          placeHolder={t('yearForm.placeHolder.year').toString()}
        />
      </YearFormDialog>
    </>
  );
};

export default YearForm;
