import { BaseForm } from '@base/form/BaseForm';
import { BaseFormField } from '@base/form/formField/BaseFormField';
import { BaseInput } from '@base/input/BaseInput';
import { Button } from '@base/button/Button';
import { useActionData, useNavigation } from 'react-router';
import type { LoginActionError } from '@domain/auth/loginSchema';

export function LoginForm() {
  const actionData = useActionData() as LoginActionError | undefined;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const errors = actionData?.errors ?? {};
  const emailError = errors?.email?.[0];
  const passwordError = errors?.password?.[0];

  return (
    <BaseForm method="post">
      <div className="form__header">
        <h1 className="form__title">ログイン</h1>
        <p className="form__description">FocusGrid Board にサインインします。</p>
      </div>

      <BaseFormField
        label="メールアドレス"
        htmlFor="email"
        required
        error={emailError}
        helpText="登録済みのメールアドレスを入力してください。"
      >
        <BaseInput
          id="email"
          type="email"
          name="email"
          autoComplete="email"
          defaultValue={actionData?.values.email as string | undefined}
        />
      </BaseFormField>

      <BaseFormField
        label="パスワード"
        htmlFor="password"
        required
        error={passwordError}
        helpText="パスワードを入力してください。"
      >
        <BaseInput
          id="password"
          type="password"
          name="password"
          autoComplete="password"
          defaultValue={actionData?.values.password as string | undefined}
        />
      </BaseFormField>

      <div className="form__actions">
        <Button variant="primary" type="submit" fullWidth>
          {isSubmitting ? 'ログイン中…' : 'ログイン'}
        </Button>
      </div>
    </BaseForm>
  );
}
