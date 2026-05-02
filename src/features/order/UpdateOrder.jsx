import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";

export default function UpdateOrder() {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state !== "idle";

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button disabled={isSubmitting} type="primary">
        {isSubmitting ? "Updating..." : "Make Priority"}
      </Button>
    </fetcher.Form>
  );
}
