import express from 'express';
import { NodemailerAdpter } from './adapters/nodeMailer/nodeMailAdapter';
import { PrismaFeedbackRepository } from './repositories/prisma/prismaFeedbacksRepository';
import { SubmitFeedbackUseCase } from './use-cases/submitFeedbackUseCase';

export const routes = express.Router()





routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbackRepository = new PrismaFeedbackRepository()
  const nodemailerAdpter = new NodemailerAdpter()


  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbackRepository,
    nodemailerAdpter
  )

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  });


  return res.status(201).send();
});