import { ChatMessage, ChatSession, ChatContext, FinancialRecommendation } from '@/lib/types/chat';

export async function sendChatMessage(
  message: string,
  context?: ChatContext
): Promise<ChatMessage> {
  // Simulated AI response generation
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    id: Date.now().toString(),
    role: 'assistant',
    content: `This is a simulated response to your message: "${message}". I am still under development and cannot provide real financial advice.`,
    timestamp: new Date().toISOString()
  };
}

export async function getFinancialRecommendations(): Promise<FinancialRecommendation[]> {
  await new Promise(resolve => setTimeout(resolve, 800));

  return [
    {
      id: '1',
      title: 'Portfolio Rebalancing Opportunity',
      description: 'Your technology sector allocation has drifted above target. Consider rebalancing to maintain your risk profile.',
      type: 'Portfolio Management',
      category: 'action_required',
      priority: 'high',
      impact: 'Reduce portfolio volatility by 15%',
      confidence: 0.89,
      actionSteps: [
        'Review current tech sector allocation',
        'Identify overweight positions',
        'Plan gradual rebalancing strategy',
        'Consider tax implications'
      ]
    },
    {
      id: '2',
      title: 'Emergency Fund Enhancement',
      description: 'Current emergency fund covers 4 months of expenses. Consider increasing to 6 months for better security.',
      type: 'Risk Management',
      category: 'opportunity',
      priority: 'medium',
      impact: 'Improve financial security buffer',
      confidence: 0.92,
      actionSteps: [
        'Analyze current monthly expenses',
        'Set up automated savings transfer',
        'Review high-yield savings options',
        'Track progress monthly'
      ]
    }
  ];
}

export async function getChatHistory(): Promise<ChatSession[]> {
  await new Promise(resolve => setTimeout(resolve, 500));

  return [
    {
      id: '1',
      title: 'Investment Strategy Discussion',
      lastMessage: 'Let me analyze your portfolio allocation...',
      timestamp: new Date().toISOString(),
      category: 'investment'
    },
    {
      id: '2',
      title: 'Retirement Planning',
      lastMessage: 'Based on your goals, here\'s a recommended savings rate...',
      timestamp: new Date(Date.now() - 86400000).toISOString(),
      category: 'planning'
    }
  ];
}

export async function getChatContext(): Promise<ChatContext> {
  await new Promise(resolve => setTimeout(resolve, 300));

  return {
    portfolioValue: 150000,
    riskTolerance: 'medium',
    investmentGoals: ['retirement', 'house_down_payment'],
    marketConditions: {
      trend: 'bullish',
      volatility: 'medium'
    }
  };
}
