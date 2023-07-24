export function customFormSubmit() {
    const theForm = document.querySelectorAll<HTMLDivElement>('[cl-form-submit="form"]');

    theForm?.forEach((e) => {
        const button = e.querySelector<HTMLButtonElement>('[cl-form-submit="button"]');
        const form = e.querySelector<HTMLFormElement>('form');

        button?.addEventListener("click", function (event) {
            event.preventDefault();
            if (form) form.requestSubmit();
        });
    });
}
