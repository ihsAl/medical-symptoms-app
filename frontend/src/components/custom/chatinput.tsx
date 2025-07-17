import { Textarea } from "../ui/textarea";
import { cx } from 'classix';
import { Button } from "../ui/button";
import { ArrowUpIcon } from "./icons"
import { toast } from 'sonner';

interface ChatInputProps {
    question: string;
    setQuestion: (question: string) => void;
    onSubmit: (text?: string) => void;
    isLoading: boolean;
}


export const ChatInput = ({ question, setQuestion, onSubmit, isLoading }: ChatInputProps) => {
    return (
        <div className="relative w-full flex flex-col gap-4">

            <Textarea
                placeholder="Please tell us your symptoms..."
                className={cx(
                    'min-h-[24px] max-h-[calc(75dvh)] overflow-hidden resize-none rounded-xl text-base bg-muted',
                )}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={(event) => {
                    if (event.key === 'Enter' && !event.shiftKey) {
                        event.preventDefault();

                        if (isLoading) {
                            toast.error('Please wait for the model to finish its response!');
                        } else {
                            onSubmit(); 
                        }
                    }
                }}
                rows={3}
                autoFocus
            />

                    <Button
            className={cx(
                "absolute bottom-2 right-2 m-1 p-2 h-fit rounded-full",
                "bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600",
                "hover:from-purple-600 hover:to-indigo-700",
                "text-white shadow-lg shadow-purple-500/30 transition-all duration-300",
                "disabled:opacity-40 disabled:cursor-not-allowed"
            )}
            onClick={() => onSubmit(question)}
            disabled={question.length === 0}
            >
            <ArrowUpIcon size={16} />
            </Button>

        </div>
    );
};
