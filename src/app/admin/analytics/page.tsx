
"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart3, Users, Eye, ShoppingCart, UserCheck, UserPlus, Loader2, Activity, History, Globe } from "lucide-react";
import Image from "next/image";
import axios from 'axios';
import { format, formatDistanceToNow } from 'date-fns';
import type { IVisitEvent } from '@/models/VisitEvent';
import type { IUserActionEvent } from '@/models/UserActionEvent';
import type { IUser } from '@/models/User';

interface HighlightStat {
  title: string;
  value: string | number;
  icon: React.ElementType;
  trend?: string;
  color: string;
  bgColor: string;
}

interface PopulatedUser {
  _id: string;
  name: string;
  email: string;
}

interface PopulatedVisitEvent extends Omit<IVisitEvent, 'userId' | 'timestamp'> {
  userId?: PopulatedUser | null;
  timestamp: string; // API will send ISO string
}

interface PopulatedUserActionEvent extends Omit<IUserActionEvent, 'userId' | 'timestamp'> {
  userId?: PopulatedUser | null;
  timestamp: string; // API will send ISO string
}


export default function AdminAnalyticsPage() {
  const [highlights, setHighlights] = useState<HighlightStat[]>([]);
  const [loadingHighlights, setLoadingHighlights] = useState(true);
  const [errorHighlights, setErrorHighlights] = useState<string | null>(null);

  const [recentVisits, setRecentVisits] = useState<PopulatedVisitEvent[]>([]);
  const [loadingVisits, setLoadingVisits] = useState(true);
  const [errorVisits, setErrorVisits] = useState<string | null>(null);

  const [recentActions, setRecentActions] = useState<PopulatedUserActionEvent[]>([]);
  const [loadingActions, setLoadingActions] = useState(true);
  const [errorActions, setErrorActions] = useState<string | null>(null);

  const analyticsConfig = [
    { key: "totalSiteVisits", title: "Total Site Visits", icon: Globe, color: "text-primary", bgColor: "bg-primary/10" },
    { key: "uniqueVisitors", title: "Unique Visitors", icon: Users, color: "text-accent", bgColor: "bg-accent/10" },
    { key: "totalCourseViews", title: "Total Course Views", icon: Eye, color: "text-green-600", bgColor: "bg-green-600/10" },
    { key: "successfulCheckouts", title: "Successful Checkouts", icon: ShoppingCart, color: "text-orange-600", bgColor: "bg-orange-600/10" },
    { key: "newSignups", title: "New Signups", icon: UserPlus, color: "text-purple-600", bgColor: "bg-purple-600/10" },
    { key: "activeUsers", title: "Active Users (30d)", icon: UserCheck, color: "text-teal-600", bgColor: "bg-teal-600/10" },
  ];

  useEffect(() => {
    const fetchHighlights = async () => {
      try {
        setLoadingHighlights(true);
        const response = await axios.get('/api/analytics/highlights');
        const data = response.data;
        const formattedHighlights = analyticsConfig.map(config => ({
          ...config,
          value: data[config.key]?.toLocaleString() || '0',
          trend: data[config.key + 'Trend'] || '+0%', // Assuming trend data might come like this
        }));
        setHighlights(formattedHighlights);
      } catch (err) {
        setErrorHighlights('Failed to load analytics highlights.');
        console.error(err);
      } finally {
        setLoadingHighlights(false);
      }
    };

    const fetchRecentVisits = async () => {
      try {
        setLoadingVisits(true);
        const response = await axios.get<PopulatedVisitEvent[]>('/api/analytics/recent-visits');
        setRecentVisits(response.data);
      } catch (err) {
        setErrorVisits('Failed to load recent visits.');
        console.error(err);
      } finally {
        setLoadingVisits(false);
      }
    };

    const fetchRecentActions = async () => {
      try {
        setLoadingActions(true);
        const response = await axios.get<PopulatedUserActionEvent[]>('/api/analytics/recent-actions');
        setRecentActions(response.data);
      } catch (err) {
        setErrorActions('Failed to load recent user actions.');
        console.error(err);
      } finally {
        setLoadingActions(false);
      }
    };
    
    fetchHighlights();
    fetchRecentVisits();
    fetchRecentActions();
  }, []);

  return (
    <div className="space-y-8 p-2 md:p-0 max-w-screen-xl mx-auto">
      <Card className="shadow-xl border-l-4 border-primary">
        <CardHeader className="flex flex-row items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-md">
            <BarChart3 className="h-8 w-8 text-primary" />
          </div>
          <div>
            <CardTitle className="text-2xl font-headline text-primary">Platform Analytics Overview</CardTitle>
            <CardDescription>Track website traffic, user engagement, course interactions, and sales metrics.</CardDescription>
          </div>
        </CardHeader>
      </Card>

      {loadingHighlights ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(6).fill(0).map((_, i) => (
                <Card key={i} className="shadow-md animate-pulse">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 h-12 bg-muted/50 rounded-t-lg"></CardHeader>
                    <CardContent className="h-20 bg-muted/30 rounded-b-lg"></CardContent>
                </Card>
            ))}
        </div>
      ) : errorHighlights ? (
        <p className="text-destructive text-center">{errorHighlights}</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map(stat => (
            <Card key={stat.title} className={`shadow-md border-l-4 border-[${stat.color.replace('text-', '')}] ${stat.bgColor.replace('bg-', 'bg-')}`}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className={`text-sm font-medium ${stat.color}`}>{stat.title}</CardTitle>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className={`text-3xl font-bold text-foreground`}>{stat.value}</div>
                {/* <p className={`text-xs text-muted-foreground`}>{stat.trend} from last month</p> */}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Card className="shadow-lg border bg-card">
        <CardHeader className="flex flex-row items-center gap-3">
          <div className="p-2.5 bg-primary/10 rounded-md">
            <Globe className="h-6 w-6 text-primary"/>
          </div>
          <div>
            <CardTitle className="font-headline text-xl">Recent Site Visits</CardTitle>
            <CardDescription>Latest recorded page visits across the platform.</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {loadingVisits ? (
            <div className="flex justify-center items-center py-10"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>
          ) : errorVisits ? (
            <p className="text-destructive text-center py-10">{errorVisits}</p>
          ) : recentVisits.length === 0 ? (
             <p className="text-muted-foreground text-center py-10">No recent visit data available.</p>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>Path</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>Session ID</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentVisits.map((visit) => (
                    <TableRow key={visit._id as string}>
                      <TableCell className="text-xs text-muted-foreground whitespace-nowrap" title={format(new Date(visit.timestamp), 'PPpp')}>
                        {formatDistanceToNow(new Date(visit.timestamp), { addSuffix: true })}
                      </TableCell>
                      <TableCell className="text-sm font-medium text-foreground max-w-xs truncate" title={visit.path}>{visit.path}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {visit.userId ? (
                          <Link href={`/admin/users?search=${visit.userId.email}`} className="hover:underline text-primary">
                            {visit.userId.name} ({visit.userId.email})
                          </Link>
                        ) : 'Anonymous'}
                      </TableCell>
                      <TableCell className="text-xs text-muted-foreground truncate" title={visit.sessionId}>{visit.sessionId ? visit.sessionId.substring(0,12) + '...' : 'N/A'}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="shadow-lg border bg-card">
        <CardHeader className="flex flex-row items-center gap-3">
           <div className="p-2.5 bg-accent/10 rounded-md">
            <Activity className="h-6 w-6 text-accent"/>
          </div>
          <div>
            <CardTitle className="font-headline text-xl">Recent User Activity</CardTitle>
            <CardDescription>Latest significant user actions (signups, logins, etc.).</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {loadingActions ? (
            <div className="flex justify-center items-center py-10"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>
          ) : errorActions ? (
            <p className="text-destructive text-center py-10">{errorActions}</p>
          ) : recentActions.length === 0 ? (
            <p className="text-muted-foreground text-center py-10">No recent user activity data available.</p>
          ): (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead>Details</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentActions.map((action) => (
                    <TableRow key={action._id as string}>
                      <TableCell className="text-xs text-muted-foreground whitespace-nowrap" title={format(new Date(action.timestamp), 'PPpp')}>
                        {formatDistanceToNow(new Date(action.timestamp), { addSuffix: true })}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                         {action.userId ? (
                          <Link href={`/admin/users?search=${action.userId.email}`} className="hover:underline text-primary">
                            {action.userId.name} ({action.userId.email})
                          </Link>
                        ) : 'System/Unknown'}
                      </TableCell>
                      <TableCell className="text-sm font-medium text-foreground">{action.actionType}</TableCell>
                      <TableCell className="text-xs text-muted-foreground max-w-md truncate" title={action.details ? JSON.stringify(action.details) : 'N/A'}>
                        {action.details ? JSON.stringify(action.details) : 'N/A'}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="shadow-lg border bg-card">
        <CardHeader>
          <CardTitle className="font-headline text-xl">Detailed Reports (Coming Soon)</CardTitle>
          <CardDescription>
            This section will feature detailed reports and visualizations for visitor trends, course popularity,
            user activity funnels (signup, login, checkout), and more.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center py-12">
          <Image 
            src="https://placehold.co/600x350/EBF4FF/3B82F6?text=Analytics+Charts+Placeholder" 
            alt="Analytics charts placeholder" 
            width={600} 
            height={350}
            className="mx-auto rounded-lg shadow-md"
            data-ai-hint="data charts graphs analytics dashboard interface"
          />
          <p className="mt-6 text-muted-foreground">
            Detailed charts and data tables are under development.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
