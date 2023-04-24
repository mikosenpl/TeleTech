import { Button } from 'primereact/button';
import { Service } from '../../models/PriceOfService';
import { useRef, useState } from 'react';
import InputField from '../Forms/InputField';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Toast } from 'primereact/toast';
import { addService, updateService } from '../../store/slices/display/displaySlice';
import { useTranslation } from 'react-i18next';
import { RootState } from '../../store/store';
import { Currency } from '../../enums/Currency';
import { isServiceNameUnique } from '../../utils/unique';
import { ServiceFormDialogMainButton, ServiceFormDialog } from './ServiceForm.styles';

interface ServiceFormProps {
  service?: Service;
}

const ServiceForm = (props: ServiceFormProps) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const allYears: number[] = useSelector((state: RootState) => state.display.years);
  const allServices: Service[] = useSelector((state: RootState) => state.display.services);
  const [visible, setVisible] = useState(false);

  const toast = useRef<Toast>(null);

  const form = useForm<Service>({
    defaultValues: props.service,
  });

  const onSubmit = (data: Service) => {
    if (props.service) {
      const service = data;
      data.pricePerYear.forEach((pricePerYear, index) => {
        if (!pricePerYear.year) {
          service.pricePerYear[index].year = allYears[index];
        }
        if (!pricePerYear.currency) {
          service.pricePerYear[index].currency = Currency.PLN;
        }
      });
      dispatch(updateService(service));
      setVisible(false);
      toast.current?.show({
        severity: 'success',
        summary: t('info.service.update'),
        life: 3000,
      });
    } else {
      if (isServiceNameUnique(allServices, data.nameOfService)) {
        dispatch(addService(data));
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
      <ServiceFormDialogMainButton
        label={t('button.save').toString()}
        icon="pi pi-check"
        onClick={form.handleSubmit(onSubmit)}
        autoFocus
      />
    </div>
  );

  return (
    <>
      <ServiceFormDialogMainButton
        label={props.service ? t('button.edit').toString() : t('button.add').toString()}
        onClick={() => setVisible(true)}
      />
      <Toast ref={toast} />
      <ServiceFormDialog
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

        {props.service &&
          allYears.map((number: number, index) => {
            return (
              <InputField
                key={number}
                control={form.control}
                name={`pricePerYear[${index}].price`}
                label={`${t('serviceForm.label.price')} ${number}`}
                type={'number'}
                placeHolder={`${t('serviceForm.placeHolder.price')} ${Currency.PLN}`}
                required={false}
              />
            );
          })}
      </ServiceFormDialog>
    </>
  );
};

export default ServiceForm;
