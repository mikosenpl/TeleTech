import { Button } from 'primereact/button';
import { PricePerYear, Service } from '../../models/PriceOfService';
import { useRef, useState } from 'react';
import InputField from '../Forms/InputField';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Toast } from 'primereact/toast';
import { addService, updateService } from '../../store/slices/display/displaySlice';
import {
  NewServiceDialog,
  NewServiceDialogMainButton,
} from '../NewServiceList/NewServiceList.styles';
import { useTranslation } from 'react-i18next';
import { RootState } from '../../store/store';
import { Currency } from '../../enums/Currency';

interface ServiceFormProps {
  service?: Service;
}

const ServiceForm = (props: ServiceFormProps) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const feedbackMessage = useSelector((state: RootState) => state.display.feedbackMessage);
  const allYears: number[] = useSelector((state: RootState) => state.display.years);
  const [visible, setVisible] = useState(false);

  const toast = useRef<Toast>(null);

  const form = useForm<Service>({
    defaultValues: props.service,
  });

  const onSubmit = (data: Service) => {
    if (props.service) {
      dispatch(updateService(data));
    } else {
      dispatch(addService(data));
    }
    if (feedbackMessage !== undefined) {
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
      form.setError('nameOfService', { type: 'focus' });
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
      <NewServiceDialogMainButton
        label={t('button.save').toString()}
        icon="pi pi-check"
        onClick={form.handleSubmit(onSubmit)}
        autoFocus
      />
    </div>
  );

  return (
    <>
      <NewServiceDialogMainButton
        label={props.service ? t('button.edit').toString() : t('button.add').toString()}
        onClick={() => setVisible(true)}
      />
      <Toast ref={toast} />
      <NewServiceDialog
        header={
          props.service
            ? `${t('serviceForm.header.edit')} ${props.service.nameOfService}`
            : t('serviceForm.header.add')
        }
        visible={visible}
        onHide={() => setVisible(false)}
        footer={footerContent}
      >
        <InputField
          control={form.control}
          name={'nameOfService'}
          label={t('serviceForm.label.nameOfService')}
          type={'text'}
          disabled={props.service ? true : false}
          placeHolder={
            props.service
              ? t('serviceForm.placeHolder.nameOfServiceEdit').toString()
              : t('serviceForm.placeHolder.nameOfServiceAdd').toString()
          }
          required={false}
        />

        {props.service
          ? props.service?.pricePerYear.map((price: PricePerYear, index) => {
              return (
                <InputField
                  control={form.control}
                  name={`pricePerYear[${index}].price`}
                  label={`${t('serviceForm.label.price')} ${price.year}`}
                  type={'number'}
                  placeHolder={`${t('serviceForm.placeHolder.price')} ${price.currency}`}
                  required={false}
                />
              );
            })
          : allYears.map((number: number, index) => {
              return (
                <InputField
                  control={form.control}
                  name={`pricePerYear[${index}].price`}
                  label={`${t('serviceForm.label.price')} ${number}`}
                  type={'number'}
                  placeHolder={`${t('serviceForm.placeHolder.price')} ${Currency.PLN}`}
                  required={false}
                />
              );
            })}
      </NewServiceDialog>
    </>
  );
};

export default ServiceForm;
