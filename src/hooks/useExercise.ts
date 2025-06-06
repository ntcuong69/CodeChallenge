import { useEffect, useState } from "react";
import axios from "axios";

interface Exercise {
  EID: number;
  Content: string;
  Difficulty: string;
}

export function useExercise(id: string, eid: string) {
  const [exercise, setExercise] = useState<Exercise | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExercise = async () => {
      try {
        const res = await axios.get(`/api/topics/${id}/exercise/${eid}`);
        setExercise(res.data.exercise);
      } finally {
        setLoading(false);
      }
    };
    fetchExercise();
  }, [id, eid]);

  return { exercise, loading };
}